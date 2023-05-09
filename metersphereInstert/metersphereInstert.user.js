// ==UserScript==
// @name         metersphereInstert
// @namespace
// @version      0.1
// @description  try to take over the world!
// @author       byte
// @match        https://autotest.teletraan.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    console.log("加载脚本")
    var button = document.createElement("button");
    button.textContent = "创建";
    button.style.width = "90px";
    button.style.height = "32px";
    button.style.align = "center";
    button.style.color = "white";
    button.style.background = "#e33e33";
    button.style.border = "1px solid #e33e33";
    button.style.borderRadius = "4px";
    button.style.margin_top = "30px";
    button.style.pardding_left = "50px";
    button.addEventListener("click", clickBotton)
    function clickBotton(){
        document.querySelector("#tab-add > div > button").click()
    }

    function get_button(){
        var sys_header=document.querySelector("#pane-default > div > div > div")
        sys_header.appendChild(button);
    }
    setTimeout(get_button,3000);
})();