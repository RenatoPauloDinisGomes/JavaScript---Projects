/**
 * Created by User on 14/04/2016.
 */
"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var Mensagem = "";
function main() {
    console.log("host: " + location.host);
    window.addEventListener("message", messageHandler);
    showPage("MenuLogin.html");
}
function showPage(path) {
    var frm = document.getElementsByTagName("iframe")[0];
    frm.src = path;
    frm.addEventListener("load", function (ev) {
        frm.contentWindow.postMessage(Mensagem, '*');
    });
}
function messageHandler(ev) {
    // alert(ev.data);
    var frm = document.getElementsByTagName("iframe")[0];
    //console.log(ev.data);
    var mensagens = ev.data.split("-");
    // 0-pagina anterior 1-proxima pagina 2-user name 3-pass? 4-comando de som(0-100)
    // console.log("Origem: "+mensagens[0]+"\nDestino: "+mensagens[1]);
    Mensagem = ev.data;
    // frm.contentWindow.postMessage(ev.data,'*');
    frm.src = mensagens[1];
    // http://www.w3schools.com/html/html5_webstorage.asp
}
