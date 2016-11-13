"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
var Message = "";

function main() {
    var url_controles = location.protocol + "//" + location.host + "/Alteracontroles.php";
    //menssagens do pagina anterior
    var array = [];
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
        array = Message.split("-");

        if (parseInt(array[5]) == 1) {
            controles1.checked = true;
            controles2.checked = false;
        } else {
            controles1.checked = false;
            controles2.checked = true;
        }

        controles1.addEventListener("click", function (ev) {
            controles2.checked = false;
        });
        controles2.addEventListener("click", function (ev) {
            controles1.checked = false;
        });
    });

    var btnsave = document.getElementById("Save");
    var btnback = document.getElementById("btnback");
    var controles1 = document.getElementById("controles1");
    var controles2 = document.getElementById("controles2");

    btnback.addEventListener("click", function (ev) {
        // window.location.href="MenuGame.html";
        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
    });
    btnsave.addEventListener("click", function (ev) {
        var controles;
        if (controles1.checked) {
            controles = 1;

        } else {
            controles = 2;
        }
        var frase = "username=" + array[4] + "&controles=" + controles.toString();
        var registerHandler = function (ev) {
            document.removeEventListener("update", registerHandler);
            //var msg = document.getElementById("register_controls");
            if (ev.response["success"] == 1) {
                //msg.innerHTML = "User " + ev.response["msg"];
                MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + array[4] + "-" + controles.toString() + "-" + array[6], '*');
            } else {
                alert("Problem with controls: " + ev.response["error_msg"]);
            }
        }
        document.addEventListener("update", registerHandler);
        sendData(frase, url_controles, "update");
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
    XHR.responseType = "json";
    XHR.send(data);
}

