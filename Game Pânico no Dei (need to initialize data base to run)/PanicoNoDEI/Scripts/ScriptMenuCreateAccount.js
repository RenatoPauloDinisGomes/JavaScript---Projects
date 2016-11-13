/**
 * Created by User on 02/04/2016.
 */
"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
function main() {
    var url_register = location.protocol + "//" + location.host + "/register.php";
    //menssagens do pagina anterior
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
    });

    var btnback = document.getElementById("btnback");
    var btnCreat = document.getElementById("btnstart");
    btnback.addEventListener("click", function (ev) {
        MainSource.postMessage(window.location.pathname + '-MenuLogin.html', '*');
    });
    btnCreat.addEventListener("click", function (ev) {
        var username = document.getElementById("user").value;
        var Pass1 = document.getElementById("pass").value;
        var Pass2 = document.getElementById("pass2").value;
        //cria funçao para ver se user name ja utilizado
        if (Pass1 == Pass2) {
            var registerHandler = function (ev) {
                document.removeEventListener("resgister", registerHandler);
                console.log(ev.response);
                if (ev.response["confirm"] == 1) {
                    //msg.innerHTML = "User " + ev.response["username"] + " registed with success!";
                    MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1-' + ev.response["username"] + "-" + ev.response["controles"] + "-" + ev.response["MScor"], '*');

                } else {
                    alert("Problem with registration: " + ev.response["error_msg"]);
                }
            }
            document.addEventListener("register", registerHandler);
            var frase = "username=" + username + "&password=" + Pass1 + "&controles=" + "1" + "&Mscor=" + "0";
            sendData(frase, url_register, "register");
            // window.location.href="MenuGame.html";

        } else {
            alert("Passwords must be equal!");
        }
    })
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
