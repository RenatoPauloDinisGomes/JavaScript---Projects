"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
//pagina main anterior
var MainSource;
var Message = "";
function main() {

    //menssagens do pagina anterior
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Message = ev.data;
    });
    //butons by id
    var btnNewGame = document.getElementById("NewGame");
    var btnLoadGame = document.getElementById("LoadGame");
    var btnScores = document.getElementById("TopScores");
    var btnHelp = document.getElementById("Help");
    var btnAbout = document.getElementById("About");
    var btnOptions = document.getElementById("Options");
    var btnExitMenu = document.getElementById("ExitMenu");
    var btnExitGame = document.getElementById("ExitGame");
    //Aux de chamada da funcçao
    function htmlPassageHandlerAux(ev) {
        htmlPassageHandler(ev);
    }

    //add listeners
    btnNewGame.addEventListener("click", htmlPassageHandlerAux);
    btnLoadGame.addEventListener("click", htmlPassageHandlerAux);
    btnScores.addEventListener("click", htmlPassageHandlerAux);
    btnHelp.addEventListener("click", htmlPassageHandlerAux);
    btnAbout.addEventListener("click", htmlPassageHandlerAux);
    btnOptions.addEventListener("click", htmlPassageHandlerAux);
    btnExitMenu.addEventListener("click", htmlPassageHandlerAux);
    btnExitGame.addEventListener("click", htmlPassageHandlerAux);
}
function htmlPassageHandler(ev) {
    if (ev.target.id != "ExitGame" && ev.target.id != "ExitMenu") {
        //  window.location.href = "Menu"+ev.target.id+".html"
        //fram para enviar a postmessage
        //var frm = document.getElementsByTagName("iframe")[0];
        //pagina main anterior
        var array = Message.split("-");
        console.log(array);
        MainSource.postMessage(window.location.pathname + '-Menu' + ev.target.id + '.html-1-1' + "-" + array[4] + "-" + array[5] + "-" + array[6], '*');
        //MainSource.postMessage('Menu'+ev.target.id+'.html','*');
    }
    else if (ev.target.id == "ExitMenu") {
        // window.location.href = "MenuLogin.html";
        //MainSource.postMessage('MenuLogin.html','*');
        MainSource.postMessage(window.location.pathname + '-MenuLogin.html', '*');

    }
    else if (ev.target.id == "ExitGame") {
        if (confirm("Are you sure?")) {
            // window.location.href = "about:blank";
            //    MainSource.postMessage('about:blank','*');
            MainSource.postMessage(window.location.pathname + '-about:blank', '*');
        }
    }
}

function messageHandler(ev) {
    //  console.log("message: " + ev.data);
    return ev.source;

}
