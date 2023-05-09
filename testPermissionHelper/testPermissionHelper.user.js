// ==UserScript==
// @name         testPermissionHelper
// @namespace    test_permission_helper
// @version      v1.0
// @author       byte
// @description  当页面中出现某个元素时，自动登录并刷新页面
// @match        *://*.teletraan.io/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==



(function() {
    'use strict';
    // 配置用户名密码和企业码
    const account='';
    const password='';
    const tenantCode='';
    // 定义要监测的元素选择器
    const elementSelector = 'body > div.MuiModal-root.MuiDialog-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-16u656j > div';
    const currentUrl = window.location.href;
    console.log("当前地址 "+currentUrl);
    const regex = /(^https?:\/\/[^/]+)/i;
    const match = currentUrl.match(regex);
    const baseUrl = match[1];
    console.log("根目录 "+baseUrl);
    // 定义登录请求的URL
    const loginUrl = baseUrl+'/graphql';
    console.log(loginUrl)
    // 发送登录请求并将token保存到本地缓存中
    function loginAndSaveToken() {
        GM_xmlhttpRequest({
            method: 'POST',
            url: loginUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "operationName": "login",
                "variables": {
                    "input": {
                        "account": account,
                        "password": password,
                        "tenantCode": tenantCode
                    }
                },
                "query": "mutation login($input: LoginInput!) {\n  login(input: $input) {\n    token\n    userId\n    __typename\n  }\n}"
            }),
            onload: function(response) {
                const result = JSON.parse(response.responseText);
                console.log('登录结果', result);
                if (result.data && result.data.login && result.data.login.token) {
                    localStorage.setItem('AUTH_TOKEN', '"' + result.data.login.token + '"');
                } else {
                    // 重新调用登录请求
                    loginAndSaveToken();
                }
            }
        });
    }

    // 登录后刷新页面
   function refreshPage() {
       console.log('开始刷新页面');
       // 在这里加入延迟1000毫秒的代码
       setTimeout(() => {
           window.location.reload();
           //window.location.replace(baseUrl)
       }, 600);
}

    // 定义MutationObserver以监测页面变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            const element = document.querySelector(elementSelector);
            if (element) {
                // 元素已出现，发送登录请求并刷新页面
                loginAndSaveToken();
                refreshPage();
                observer.disconnect();
            }
        });
    });

    // 开始监测页面变化
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();