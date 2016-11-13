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
    var url = location.protocol + "//" + location.host + "/EnviaScor.php";
    var type = "Scores";
    var array = [];
    var scoreHandler = function (ev) {
        document.removeEventListener(ev.type, scoreHandler);
        console.log(ev.response);
        if (ev.response["success"] == 1) {
            list(ev.response.hscores, ev.type);
        } else {
            console.log("Server problem: " + ev.response["error_msg"]);
        }
    }
    document.addEventListener(type, scoreHandler);
    sendData(url, type);

    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
        array = Message.split("-");

    });
    var btnback = document.getElementById("btnback");
    btnback.addEventListener("click", function (ev) {
        // window.location.href="MenuGame.html";
        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
}
function messageHandler(ev) {
    // console.log("message: " + ev.data);
    return ev.source;
}

function list(scores) {
    scores = sortHS(scores);
    var jogador1 = document.getElementById("jogador1");
    var jogador2 = document.getElementById("jogador2");
    var jogador3 = document.getElementById("jogador3");
    switch (scores.length) {
        case 0:
            jogador1.innerHTML = "------------------";
            jogador2.innerHTML = "------------------";
            jogador3.innerHTML = "------------------";
            break;
        case 1:
            jogador1.innerHTML = scores[0]["username"] + "---" + scores[0]["MScor"];
            jogador2.innerHTML = "------------------";
            jogador3.innerHTML = "------------------";
            break;
        case 2:
            jogador1.innerHTML = scores[0]["username"] + "---" + scores[0]["MScor"];
            jogador2.innerHTML = scores[1]["username"] + "---" + scores[1]["MScor"];
            jogador3.innerHTML = "------------------";
            break;
        default:
            jogador1.innerHTML = scores[0]["username"] + "---" + scores[0]["MScor"];
            jogador2.innerHTML = scores[1]["username"] + "---" + scores[1]["MScor"];
            jogador3.innerHTML = scores[2]["username"] + "---" + scores[2]["MScor"];
    }

}

function sortHS(scores) {//insertion sort
    for (var i = 1; i < scores.length; i++) {
        var a = scores[i];
        console.log (a);
        for (var j = i - 1; j >= 0 && (parseInt(a["MScor"]) >= parseInt(scores[j]["MScor"])); j--) {
            scores[j + 1] = scores[j];
        }
        scores[j + 1] = a;
    }
    return scores;
}

function sendData(url, type) {
    var XHR = new XMLHttpRequest();
    XHR.onloadend = function () {
        var response = XHR.response;
        console.log(response);
        var ev = new Event(type);
        ev.response = response;
        document.dispatchEvent(ev);
    }
    XHR.open('POST', url, true);
    XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
    XHR.setRequestHeader("Access-Control-Allow-Origin", "*");
    XHR.setRequestHeader("Access-Control-Allow-Credentials", "true");
    XHR.responseType = "json";
    XHR.send();
}