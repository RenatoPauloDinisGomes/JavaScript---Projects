/**
 * Created by User on 02/04/2016.
 */
"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
var Message = "";
function main() {
    var array = [];
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
        array = Message.split("-");
    });
    var btnback = document.getElementById("btnback");
    btnback.addEventListener("click", function (ev) {
        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
}
function messageHandler(ev) {
    return ev.source;
}
