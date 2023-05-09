// ==UserScript==
// @name         jiraBugTemplate
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  jira 提单自动填充模板
// @author       byte
// @match        https://teletraan.atlassian.net/jira/*
// @match        https://teletraan.atlassian.net/issues/*

// @require      
// @grant        none
// ==/UserScript==

(function () {
    let createBtn = document.getElementById('createGlobalItemIconButton');
    let createBtn2 = document.querySelector("#createGlobalItem");

    // 添加创建按钮监听事件
    createBtn.addEventListener(
        'click',
        function () {

            console.log('1')
            let i = 0;
            let timer = setInterval(
                function () {
                    if (document.querySelector("#issue-create\\.ui\\.modal\\.create-form\\.type-picker\\.issue-type-select > div > div.css-1b6odlt > div.css-hkzqy0-singleValue > div > div.sc-1lie33m-1.dqHBji > div").textContent == '缺陷') {
                        console.log('2')

                        document.querySelector("#description-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div").click()
                        document
                            .querySelector("#description-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin")
                            .innerHTML="<p>【前置条件】：</p><p>【操作步骤】：</p><p>【预期结果】：</p><p>【实际结果】：</p><p>*【接口】：</p><p>*【日志/报错信息】：</p><p>【数据库信息】：<p>*【截图】：</p>"
                        document.querySelector("#environment-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin").click()
                        document.querySelector("#environment-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin")
                            .innerHTML="<p>【账户信息】：</p><p>*【环境信息】：</p><p>【具体数据】：</p>"
                        document.querySelector("#summary-field").click()
                        clearInterval(timer);
                    } else {
                        i++;
                        if (i >= 100) {
                            // 100 次轮询都未找到对象则停止
                            clearInterval(timer);
                        }
                    }
                }, 500)
        }
    )
    createBtn2.addEventListener(
        'click',
        function () {

            console.log('1')
            let i = 0;
            let timer = setInterval(
                function () {
                    if (document.querySelector("#issue-create\\.ui\\.modal\\.create-form\\.type-picker\\.issue-type-select > div > div.css-1b6odlt > div.css-hkzqy0-singleValue > div > div.sc-1lie33m-1.dqHBji > div").textContent == '缺陷') {
                        console.log('2')

                        document.querySelector("#description-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div").click()
                        document
                            .querySelector("#description-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin")
                            .innerHTML="<p>【前置条件】：</p><p>【操作步骤】：</p><p>【预期结果】：</p><p>【实际结果】：</p><p>*【接口】：</p><p>*【日志/报错信息】：</p><p>【数据库信息】：<p>*【截图】：</p>"
                        document.querySelector("#environment-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin").click()
                        document.querySelector("#environment-container > div > div.bjmwba-0.foFWfC > div > div > div > div > div > div.css-by1vms > div > div.css-sox1a6 > div > div.ua-chrome.ProseMirror.pm-table-resizing-plugin")
                            .innerHTML="<p>【账户信息】：</p><p>*【环境信息】：</p><p>【具体数据】：</p>"
                        document.querySelector("#summary-field").click()
                        clearInterval(timer);
                    } else {
                        i++;
                        if (i >= 100) {
                            // 100 次轮询都未找到对象则停止
                            clearInterval(timer);
                        }
                    }
                }, 500)
        }
    )
})();

