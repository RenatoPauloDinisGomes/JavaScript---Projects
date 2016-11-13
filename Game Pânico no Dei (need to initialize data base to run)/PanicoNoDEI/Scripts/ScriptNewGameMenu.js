"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
var Message = "";
function main() {
    //para receber a mensagens do anterior
    var array = [];
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
        array = Message.split("-");
    });
    //btns
    var btnBack = document.getElementById("btnback");
    var Difficulty = document.getElementById("difficulty");
    var btnStart = document.getElementById("btnstart");

    btnBack.addEventListener("click", function (ev) {

        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
    btnStart.addEventListener("click", function (ev) {
        // window.location.href="MenuInGame.html";
        MainSource.postMessage(window.location.pathname + '-MenuInGame.html-' + "1" + "-" + Difficulty.options[Difficulty.selectedIndex].value + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });

}
function messageHandler(ev) {
    //  console.log("message: " + ev.data);
    // console.log(ev.source);
    return ev.source;
}
