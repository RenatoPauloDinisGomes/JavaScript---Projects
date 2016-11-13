"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
var Message = "";
function main() {
    window.addEventListener("message", function (ev) {

        MainSource = messageHandler(ev);
        Message = ev.data;
    });

    var username;
    username = MainSource;
    var pw;
    pw = MainSource;

    console.log(location.host);
    console.log(location.protocol);
    var url_login = location.protocol + "//" + location.host + "/login.php";
    console.log(url_login);
    //menssagens do pagina anterior
    var btnstart = document.getElementById("btnstart");
    var btnexit = document.getElementById("btnback");
    var btncreat = document.getElementById("btnCreate");

    btnstart.addEventListener("click", function (ev) {
        var registerHandler = function (ev) {
            document.removeEventListener("login", registerHandler);
            if (ev.response["success"] == 1) {
                MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1-' + ev.response["username"] + "-" + ev.response["controles"] + "-" + ev.response["MScor"], '*');
            } else {
                alert("login with registration: " + ev.response["error_msg"]);
            }
        }
        document.addEventListener("login", registerHandler);
        username = document.getElementById("user").value;
        pw = document.getElementById("pass").value;
        var parametros = "username=" + username + "&password=" + pw;
        sendData(parametros, url_login, "login");

    });
    btnexit.addEventListener("click", function (ev) {
        if (confirm("Are you sure?")) {
            //window.location.href = "about:blank";

            MainSource.postMessage(window.location.pathname + 'about:blank', '*');
        }
    });
    btncreat.addEventListener("click", function (ev) {
        //     window.location.href = "MenuCreateCount.html";
        MainSource.postMessage(window.location.pathname + '-MenuCreateCount.html', '*');
    });
}
function messageHandler(ev) {
    //  console.log("message: " + ev.data);

    return ev.source;
}

function sendData(data, url, type) {
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
    XHR.responseType = "json"
    XHR.send(data);
}