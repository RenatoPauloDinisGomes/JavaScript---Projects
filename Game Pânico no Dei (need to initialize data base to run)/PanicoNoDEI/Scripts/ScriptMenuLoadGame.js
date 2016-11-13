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
    //para receber a mensagens do anterior
    var array = [];
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
        array = Message.split("-");
    });
    var level = document.getElementById("levels");
    // var difficultySelected=difficulty.options[difficulty.selectedIndex].value;
    var dif = document.getElementById("difficulty");
    var btnstart = document.getElementById("btnstart");
    var btnback = document.getElementById("btnback");

    btnback.addEventListener("click", function (ev) {
        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
    btnstart.addEventListener("click", function (ev) {
        //local de onde veio - para onde vai - nivel - dif
        MainSource.postMessage(window.location.pathname + '-MenuInGame.html-' + level.options[level.selectedIndex].value + "-" + dif.options[dif.selectedIndex].value + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
}

function messageHandler(ev) {
    //console.log("message: " + ev.data);
    // console.log(ev.source);
    return ev.source;
}
