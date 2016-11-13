"use strict";
(function () {
    //automatically called as soon as the javascript is loaded
    window.addEventListener("load", main);
}());
var MainSource;
var Mensagem;
// scor entrada...

function main() {
    console.log(location.host);
    window.addEventListener("message", function (ev) {
        MainSource = messageHandler(ev);
        Mensagem = messageHandler2(ev);
        var aux = Mensagem.split("-");
        ////DEI4/MenuLogin.html,MenuGame.html,1,1,a,1,800
        start(aux);

    });
}
function messageHandler(ev) {
    // console.log(ev.source);
    return ev.source;
}
function messageHandler2(ev) {
    // console.log(ev.source);
    return ev.data;
}
function start(array) {
    console.log (array);
    var url = location.protocol + "//" + location.host + "/AtualizaScor.php";
    var username = array [4];
    var level = parseInt(array[2]);
    var dif = parseInt(array[3]);
    var ScoreEntrada = parseInt(array[6]);
    var Scor;
    console.log("nivel: " + level);
    //Criar Game engine
    var GameEngine2 = new GameEngine();
    GameEngine2.level = level;
    GameEngine2.ScoreEntrada = ScoreEntrada;
    //canvas
    var canvasPlayer = document.getElementById("canvasPlayer");
    var ctxP = canvasPlayer.getContext("2d");
    //canvas para o gameengine
    GameEngine2.ctxP = ctxP;

    var Explosion1 = new Image();
    var ImageBullets = new Image();
    var ImagemFundo = new Image();
    var ImagemEnemie = new Image();
    var ImagemBlood0 = new Image();
    var ImagemBlood1 = new Image();
    var ImagemBlood2 = new Image();
    var ImagemProfessor = new Image();
    var Estudantefemale = new Image();
    var CenaMarada = new Image();
    var BG1 = new Image();
    var BGSprite = new Image();
    var GameOver = new Image();
    var SpritesT = new Image();
    var SpriteT1 = new Image();
    var Fim = new Image();
    //Sons
    var Som1 = new Audio("Sons/Som1.mp3");
    var Som2 = new Audio("Sons/Som2.mp3");
    var Som3 = new Audio("Sons/Som3.mp3");
    var Som4 = new Audio("Sons/Som4.mp3");
    var Som5 = new Audio("Sons/small_blast.mp3");
    var Som6 = new Audio("Sons/Shot.mp3");
    var Som7 = new Audio("Sons/Coin.wav");
    var Som8 = new Audio("Sons/Step.wav");
    var Som9 = new Audio("Sons/Dead.wav");
    var Som10 = new Audio("Sons/Lose.mp3");

    Som1.loop = true;
    Som2.loop = true;
    Som3.loop = true;
    Som4.loop = true;
    GameEngine2.Sons.push(Som1);
    GameEngine2.Sons.push(Som2);
    GameEngine2.Sons.push(Som3);
    GameEngine2.Sons.push(Som4);
    GameEngine2.Sons.push(Som5);
    GameEngine2.Sons.push(Som6);
    GameEngine2.Sons.push(Som7);
    GameEngine2.Sons.push(Som8);
    GameEngine2.Sons.push(Som9);
    GameEngine2.Sons.push(Som10);

    GameEngine2.ImagensACarregar.push(ImageBullets);
    GameEngine2.ImagensACarregar.push(ImagemFundo);
    GameEngine2.ImagensACarregar.push(ImagemEnemie);
    GameEngine2.ImagensACarregar.push(ImagemBlood0);
    GameEngine2.ImagensACarregar.push(ImagemProfessor);
    GameEngine2.ImagensACarregar.push(ImagemBlood1);
    GameEngine2.ImagensACarregar.push(ImagemBlood2);
    GameEngine2.ImagensACarregar.push(Estudantefemale);
    GameEngine2.ImagensACarregar.push(CenaMarada);
    GameEngine2.ImagensACarregar.push(Explosion1);
    GameEngine2.ImagensACarregar.push(BG1);
    GameEngine2.ImagensACarregar.push(BGSprite);
    GameEngine2.ImagensACarregar.push(GameOver);
    GameEngine2.ImagensACarregar.push(SpritesT);
    GameEngine2.ImagensACarregar.push(SpriteT1);
    GameEngine2.ImagensACarregar.push(Fim);
    //16 imagens
    // GameEngine2.ImagensACarregar.push(Som11);

    var NumeroImagens = GameEngine2.ImagensACarregar.length;
    var ImgCarregadas = 0;
    //progrees bar
    var progress = document.getElementById("progressBar");
    for (let i = 0; i < GameEngine2.ImagensACarregar.length; i++) {
        GameEngine2.ImagensACarregar[i].addEventListener("load", function () {
            ImgCarregadas++;
            if (ImgCarregadas == NumeroImagens) {
                var ImagemPlayer = new Image();
                ImagemPlayer.addEventListener("load", function (ev) {
                    //X Y imagem vida

                    GameEngine2.Player = new Player(100, 120, ev.target, 200);
                    GameEngine2.BackgroundLevel = new BackGround(ctxP, GameEngine2.ImagensACarregar[11], GameEngine2.ImagensACarregar[14]);
                    console.log("level " + level);
                    switch (level) {
                        case 2:
                            Som2.play();
                            console.log("level 2");
                            GameEngine2.BackgroundLevel.Level2(ctxP, GameEngine2.ImagensACarregar[11]);
                            GameEngine2.level2();
                            break;
                        case 3:
                            Som3.play();
                            console.log("level 3");
                            GameEngine2.level3();
                            GameEngine2.BackgroundLevel.Level3(ctxP, GameEngine2.ImagensACarregar[11], GameEngine2.ImagensACarregar[13], GameEngine2.ImagensACarregar[14]);
                            break;
                        case 4:
                            Som4.play();
                            console.log("level 4");
                            GameEngine2.level4();
                            GameEngine2.BackgroundLevel.Level4(ctxP, GameEngine2.ImagensACarregar[11], GameEngine2.ImagensACarregar[13], GameEngine2.ImagensACarregar[14]);
                            break;
                        default:
                            console.log("default");
                            Som1.play();
                            GameEngine2.level1();
                        //  GameEngine2.BackgroundLevel= new BackGround(ctxP,GameEngine2.ImagensACarregar[11]);
                    }
                    switch (dif) {
                        case 1:
                            GameEngine2.dificulty = 3;
                            break;
                        case 2:
                            GameEngine2.dificulty = 2;
                            break;
                        case 3:
                            GameEngine2.dificulty = 1;
                            GameEngine2.NumerosEnemies *= 2;
                            break;
                        case 4:
                            GameEngine2.dificulty = 0.5;
                            GameEngine2.NumerosEnemies *= 6;
                            break;
                        default:
                            GameEngine2.dificulty = 3;
                            break;
                    }
                    var Restart = document.getElementById("btnRestart");
                    var Restart2 = document.getElementById("btnRestart2");
                    var BtnExit = document.getElementById("btnExit");
                    var BtnExit2 = document.getElementById("btnExit2");
                    var Continue = document.getElementById("btnContinue");
                    window.addEventListener("keydown", function (ev) {
                        if (ev.keyCode == 82) {
                            Restart.style.visibility = "hidden";
                            Restart2.style.visibility = "hidden";
                            BtnExit.style.visibility = "hidden";
                            BtnExit2.style.visibility = "hidden";
                            GameEngine2.resetAll();
                        } else if (ev.keyCode == 80) {
                            GameEngine2.pause = true;
                            Restart2.style.visibility = "visible";
                            Continue.style.visibility = "visible";
                            BtnExit2.style.visibility = "visible";
                        }
                    });// Altera aqui !!
                    BtnExit.addEventListener("click", function (ev) {
                        var atualizaHandler = function (ev) {
                            document.removeEventListener("ALtera", registerHandler);
                            if (ev.response["success"] == 1) {
                                alert("Scor alterado")
                            } else {
                                alert("Mensagem: " + ev.response["error_msg"]);
                            }
                        }

                        if (ScoreEntrada < GameEngine2.score) {
                            document.addEventListener("ALtera", atualizaHandler);
                            var frase = "username=" + username + "&MScor=" + GameEngine2.score.toString();
                            sendData(frase, url, "register");
                            Scor = GameEngine2.score;
                        } else {
                            alert("O scor é menor");
                            Scor = ScoreEntrada;
                        }
                        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + username + "-" + array[5] + "-" + Scor, '*');


                    });
                    BtnExit2.addEventListener("click", function (ev) {
                        var atualizaHandler = function (ev) {
                            document.removeEventListener("ALtera", registerHandler);
                            if (ev.response["success"] == 1) {
                                alert("Scor alterado")
                            } else {
                                alert("Mensagem: " + ev.response["error_msg"]);
                            }
                        }

                        if (ScoreEntrada < GameEngine2.score) {
                            document.addEventListener("ALtera", atualizaHandler);
                            var frase = "username=" + username + "&MScor=" + GameEngine2.score.toString();
                            sendData(frase, url, "register");
                            Scor = GameEngine2.score;
                        } else {
                            alert("O scor é menor");
                            Scor = ScoreEntrada;
                        }
                        MainSource.postMessage(window.location.pathname + '-MenuGame.html-1-1' + "-" + username + "-" + array[5] + "-" + Scor, '*');

                    });
                    Restart.addEventListener("click", function (ev) {
                        Restart.style.visibility = "hidden";
                        BtnExit.style.visibility = "hidden";
                        GameEngine2.pause = false;
                        GameEngine2.resetAll();
                    });
                    Restart2.addEventListener("click", function (ev) {
                        Restart2.style.visibility = "hidden";
                        BtnExit2.style.visibility = "hidden";
                        Continue.style.visibility = "hidden";
                        GameEngine2.pause = false;
                        GameEngine2.resetAll();
                    });
                    Continue.addEventListener("click", function (ev) {
                        Restart.style.visibility = "hidden";
                        Restart2.style.visibility = "hidden";
                        BtnExit.style.visibility = "hidden";
                        BtnExit2.style.visibility = "hidden";
                        Continue.style.visibility = "hidden";
                        GameEngine2.pause = false;
                    });
                    //esconder a progrees bar mostrar canvas
                    setTimeout(function () {
                        progress.style.visibility = "hidden";
                        canvasPlayer.style.visibility = "visible";
                    }, 1000);


                    //controls do player
                    switch (parseInt(array[5])) {
                        case 1:
                            GameEngine2.Player.key_L = 65;
                            GameEngine2.Player.key_R = 68;
                            GameEngine2.Player.key_U = 87;
                            GameEngine2.Player.key_D = 83;
                            break;
                        case 2:
                            GameEngine2.Player.key_L = 37;
                            GameEngine2.Player.key_R = 39;
                            GameEngine2.Player.key_U = 38;
                            GameEngine2.Player.key_D = 40;
                            break;
                        default:
                            GameEngine2.Player.key_L = 65;
                            GameEngine2.Player.key_R = 68;
                            GameEngine2.Player.key_U = 87;
                            GameEngine2.Player.key_D = 83;
                    }

                    window.addEventListener("keydown", function (ev) {
                        //seta esquerda
                        if (ev.keyCode == GameEngine2.Player.key_L) {
                            GameEngine2.key_left = true;
                        }
                        //seta direita
                        if (ev.keyCode == GameEngine2.Player.key_R) {
                            GameEngine2.key_right = true;
                        }
                        //seta para cima
                        if (ev.keyCode == GameEngine2.Player.key_U) {
                            GameEngine2.key_up = true;
                        }
                        //seta baixo
                        if (ev.keyCode == GameEngine2.Player.key_D) {
                            GameEngine2.key_down = true;
                        }
                    });
                    window.addEventListener("keyup", function (ev) {
                        //seta esquerda
                        if (ev.keyCode == GameEngine2.Player.key_L) {
                            GameEngine2.key_left = false;
                        }
                        //seta direita
                        if (ev.keyCode == GameEngine2.Player.key_R) {
                            GameEngine2.key_right = false;
                        }
                        //seta para cima
                        if (ev.keyCode == GameEngine2.Player.key_U) {
                            GameEngine2.key_up = false;
                        }
                        //seta baixo
                        if (ev.keyCode == GameEngine2.Player.key_D) {
                            GameEngine2.key_down = false;
                        }
                    });
                    window.addEventListener("click", function (ev) {
                        //  console.log(ev.offsetX+" "+ev.offsetY); vetor para o click 8tiro8

                        if (GameEngine2.Player.NumeroBalas > 0) {
                            let MD = Math.sqrt(Math.pow(ev.offsetX - GameEngine2.Player.x, 2) + Math.pow(ev.offsetY - GameEngine2.Player.y, 2));
                            let dx = (ev.offsetX - GameEngine2.Player.x) / MD;
                            let dy = (ev.offsetY - GameEngine2.Player.y) / MD;

                            let Tiro2 = new Shot(GameEngine2.Player.x, GameEngine2.Player.y, dx, dy, GameEngine2.ImagensACarregar[0]);
                            GameEngine2.Player.shots.push(Tiro2);
                            GameEngine2.Player.NumeroBalas--;
                            //  GameEngine2.FrameAtual=0;
                            let angulo = Math.atan2(dy, dx) * 180 / Math.PI;

                            if ((angulo < -135 && angulo >= -180) || (angulo < 180 && angulo > 135)) {
                                GameEngine2.Player.dir = 1;
                            } else if (angulo >= 45 && angulo < 135) {
                                GameEngine2.Player.dir = 0;
                            } else if ((angulo > -45 && angulo < 0) || (angulo >= 0 && angulo < 45)) {
                                GameEngine2.Player.dir = 3;
                            } else  GameEngine2.Player.dir = 2;
                        }
                        var a = Som6.cloneNode();
                        a.play();
                    });
                    window.requestAnimationFrame(function () {
                        anim(GameEngine2);
                    });
                });
                ImagemPlayer.src = "Imagens/SpriteSheets/george.png";
            }
            progress.value += 100 / (GameEngine2.ImagensACarregar.length);
        });

    }
    //imagem  do sprite sheet a carregar
    BG1.src = "Imagens/SpriteSheets/BG1.png";
    ImageBullets.src = "Imagens/SpriteSheets/bullet.png";
    ImagemFundo.src = "Imagens/SpriteSheets/tes.jpg";
    ImagemEnemie.src = "Imagens/SpriteSheets/Enemie.png";
    ImagemBlood0.src = "Imagens/SpriteSheets/DeadEnemie0.png";
    ImagemBlood1.src = "Imagens/SpriteSheets/DeadEnemie1.png";
    ImagemBlood2.src = "Imagens/SpriteSheets/DeadEnemie2.png";
    ImagemProfessor.src = "Imagens/SpriteSheets/Professor.png";
    Estudantefemale.src = "Imagens/SpriteSheets/Estudante.png";
    CenaMarada.src = "Imagens/SpriteSheets/CenaMarada.png";
    Explosion1.src = "Imagens/SpriteSheets/explosion18.png";
    BGSprite.src = "Imagens/SpriteSheets/BackSpritesheets.png";
    GameOver.src = "Imagens/SpriteSheets/GameOver3.png";
    SpritesT.src = "Imagens/SpriteSheets/BackSpritesheets3.png";
    SpriteT1.src = "Imagens/SpriteSheets/BackSpritesheets4.png";
    Fim.src = "Imagens/SpriteSheets/Fim.png";
}
function anim(GameEngine2) {
    window.requestAnimationFrame(function () {
        anim(GameEngine2);
    });
    render(GameEngine2);
}
function render(GameEngine2) {

    if (GameEngine2.NumerosEnemies == 0 && GameEngine2.Enemies.length == 0 && GameEngine2.level == 4) {
        var Restart2 = document.getElementById("btnRestart2");
        var BtnExit2 = document.getElementById("btnExit2");
        Restart2.style.visibility = "visible";
        BtnExit2.style.visibility = "visible";
        GameEngine2.ctxP.drawImage(GameEngine2.ImagensACarregar[15], 0, -200, GameEngine2.ctxP.canvas.width, GameEngine2.ctxP.canvas.height+200);

    } else {

        if (GameEngine2.Player.life > 0 && !(GameEngine2.pause)) {
            UpdatePlayer(GameEngine2);
            CollisionsShotsEnemies(GameEngine2);
            CollisionShotsBackGround(GameEngine2);
            UpdateEnemies(GameEngine2);
            ColiisionPlayerEnemies(GameEngine2);
            if ((GameEngine2.key_down === false && GameEngine2.key_up === false && GameEngine2.key_right === false && GameEngine2.key_left === false)) {
                GameEngine2.Player.frameSprite = 0;
                GameEngine2.DrawAll();
            } else {
                GameEngine2.DrawAll();
            }
            if (GameEngine2.InTransition) {
                GameEngine2.ctxP.font = "400px Arial";
                GameEngine2.ctxP.fillText("Level " + GameEngine2.level, 50, 450);
                GameEngine2.TempTransition--;

                if (GameEngine2.TempTransition == 0) {
                    GameEngine2.InTransition = false;
                    GameEngine2.TempTransition = 150;
                }
            }
        } else if (GameEngine2.Player.life <= 0 && !(GameEngine2.pause)) {
            if (GameEngine2.GameOverAuxX < GameEngine2.ctxP.canvas.width) {
                GameEngine2.DrawAll();
                GameEngine2.GameOverAuxX += GameEngine2.ctxP.canvas.width / 30;
                GameEngine2.GameOverAuxY += GameEngine2.ctxP.canvas.height / 30;
                GameEngine2.ctxP.drawImage(GameEngine2.ImagensACarregar[12], (GameEngine2.ctxP.canvas.width / 2) - GameEngine2.GameOverAuxX / 2, (GameEngine2.ctxP.canvas.height / 2) - (GameEngine2.GameOverAuxY / 2) - 120, GameEngine2.GameOverAuxX, GameEngine2.GameOverAuxY);
            }
            else {
                var Restart = document.getElementById("btnRestart");
                var BtnExit = document.getElementById("btnExit");

                GameEngine2.ctxP.drawImage(GameEngine2.ImagensACarregar[12], (GameEngine2.ctxP.canvas.width / 2) - GameEngine2.GameOverAuxX / 2, (GameEngine2.ctxP.canvas.height / 2) - (GameEngine2.GameOverAuxY / 2) - 120, GameEngine2.GameOverAuxX, GameEngine2.GameOverAuxY);
                Restart.style.visibility = "visible";
                BtnExit.style.visibility = "visible";
            }
        }
    }

}
function UpdateEnemies(GameEngine2) {
    for (let i = 0; i < GameEngine2.Enemies.length; i++) {
        GameEngine2.Enemies[i].updateVetor(GameEngine2.Player);
        var angulo = Math.atan2(GameEngine2.Enemies[i].vetor[1], GameEngine2.Enemies[i].vetor[0]) * 180 / Math.PI;
        if ((angulo < -135 && angulo >= -180) || (angulo < 180 && angulo > 135)) {
            GameEngine2.Enemies[i].dir = 1;
        } else if (angulo >= 45 && angulo < 135) {
            GameEngine2.Enemies[i].dir = 2;
        } else if ((angulo > -45 && angulo < 0) || (angulo >= 0 && angulo < 45)) {
            GameEngine2.Enemies[i].dir = 3;
        } else GameEngine2.Enemies[i].dir = 0;
        GameEngine2.Enemies[i].frameSprite += 0.2;
        //direçao
        let x = GameEngine2.Enemies[i].x;
        let y = GameEngine2.Enemies[i].y;
        //ver isto
        var binariaX = 1;
        var binariaY = 1;
        if (Math.abs(GameEngine2.Enemies[i].vetor[0]) - Math.abs(GameEngine2.Enemies[i].vetor[1]) > 0.1) {
            GameEngine2.Enemies[i].x += GameEngine2.Enemies[i].vetor[0];

            var auxx = GameEngine2.Enemies[i].vetor[0];
            var auxy = GameEngine2.Enemies[i].vetor[1];
            if (auxx > 0) {
                binariaX = 1;
            } else {
                binariaX = -1;
            }
            if (auxy > 0) {
                binariaY = 1;
            } else {
                binariaY = -1;
            }
            if ((GameEngine2.checkCollision(GameEngine2.Enemies[i], GameEngine2.BackgroundLevel))) {
                //repor
                GameEngine2.Enemies[i].y -= binariaY * GameEngine2.Enemies[i].vetor[1];
                GameEngine2.Enemies[i].x = x;
            }

        } else if ((Math.abs(GameEngine2.Enemies[i].vetor[0]) - Math.abs(GameEngine2.Enemies[i].vetor[1]) < 0.1)) {
            GameEngine2.Enemies[i].y += GameEngine2.Enemies[i].vetor[1];
            if ((GameEngine2.checkCollision(GameEngine2.Enemies[i], GameEngine2.BackgroundLevel))) {
                //repor
                GameEngine2.Enemies[i].x -= binariaX * GameEngine2.Enemies[i].vetor[0];
                GameEngine2.Enemies[i].y = y;
            }
        } else {
            GameEngine2.Enemies[i].x += GameEngine2.Enemies[i].vetor[0];
            GameEngine2.Enemies[i].y += GameEngine2.Enemies[i].vetor[1];
            if ((GameEngine2.checkCollision(GameEngine2.Enemies[i], GameEngine2.BackgroundLevel))) {
                //repor
                GameEngine2.Enemies[i].x = x;
                GameEngine2.Enemies[i].y = y;
            }
        }
    }
}
function UpdatePlayer(GameEngine2) {
    //direçao
    let x = GameEngine2.Player.x;
    let y = GameEngine2.Player.y;
    if (GameEngine2.key_down || GameEngine2.key_left || GameEngine2.key_right || GameEngine2.key_up) {
        GameEngine2.Sons[7].play();
    }
    if (GameEngine2.key_left && GameEngine2.Player.x > 0) {
        GameEngine2.Player.x -= GameEngine2.Player.Speed;
        if (!(GameEngine2.checkCollision(GameEngine2.Player, GameEngine2.BackgroundLevel))) {
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 1;
        } else {
            GameEngine2.Player.x = x;
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 1;
        }
    }
    if (GameEngine2.key_right && GameEngine2.Player.x < GameEngine2.ctxP.canvas.width - GameEngine2.Player.width) {
        GameEngine2.Player.x += GameEngine2.Player.Speed;
        if (!(GameEngine2.checkCollision(GameEngine2.Player, GameEngine2.BackgroundLevel))) {
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 3;
        } else {
            GameEngine2.Player.x = x;
            GameEngine2.Player.frameSprite += 0.2;

            GameEngine2.Player.dir = 3;
        }

    }
    if (GameEngine2.key_up && GameEngine2.Player.y > 0) {
        GameEngine2.Player.y -= GameEngine2.Player.Speed;
        if (!(GameEngine2.checkCollision(GameEngine2.Player, GameEngine2.BackgroundLevel))) {
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 2;
        } else {
            GameEngine2.Player.y = y;
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 2;
        }

        //  GameEngine2.Player.draw(GameEngine2.ctxP,2);
    }
    if (GameEngine2.key_down && GameEngine2.Player.y < GameEngine2.ctxP.canvas.height - GameEngine2.Player.height) {
        GameEngine2.Player.y += GameEngine2.Player.Speed;
        if (!(GameEngine2.checkCollision(GameEngine2.Player, GameEngine2.BackgroundLevel))) {
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 0;
        } else {
            GameEngine2.Player.y = y;
            GameEngine2.Player.frameSprite += 0.2;
            GameEngine2.Player.dir = 0;
        }
    }
}
function CollisionsShotsEnemies(GameEngine2) {
    //tcheckar colisoes shots - Enemies
    for (let s = 0; s < GameEngine2.Player.shots.length; s++) {
        for (let c = 0; c < GameEngine2.Enemies.length; c++) {
            if (GameEngine2.checkCollision(GameEngine2.Player.shots[s], GameEngine2.Enemies[c])) {
                GameEngine2.Enemies[c].life -= GameEngine2.Player.shots[s].dano;
                if (GameEngine2.Enemies[c].life <= 0) {
                    let vetor = [];

                    vetor.push(GameEngine2.Enemies[c].x);
                    vetor.push(GameEngine2.Enemies[c].y);
                    //imagem sangue
                    vetor.push(GameEngine2.ImagensACarregar[6]);
                    vetor.push(GameEngine2.Enemies[c].width);
                    vetor.push(GameEngine2.Enemies[c].height);
                    GameEngine2.Bloods.push(vetor);
                    GameEngine2.score += GameEngine2.Enemies[c].lifei / 10;
                    GameEngine2.Enemies.splice(c, 1);
                    GameEngine2.Sons[6].cloneNode().play();
                    GameEngine2.Sons[8].cloneNode().play();
                }
                GameEngine2.Player.shots.splice(s, 1);
                s--;
                break;
            }
        }
    }
}
function CollisionShotsBackGround(GameEngine2) {
    for (let i = 0; i < GameEngine2.Player.shots.length; i++) {
        if (GameEngine2.checkCollision(GameEngine2.Player.shots[i], GameEngine2.BackgroundLevel)) {
            let vetor = [];
            vetor.push(GameEngine2.Player.shots[i].x);
            vetor.push(GameEngine2.Player.shots[i].y);
            vetor.push(GameEngine2.ImagensACarregar[9]);
            vetor.push(5);
            vetor.push(4);
            vetor.push(0);
            vetor.push(GameEngine2.Sons[4].cloneNode());
            GameEngine2.Explosions.push(vetor);
            vetor[6].volume=1;
            vetor[6].play();
            GameEngine2.Player.shots.splice(i, 1);
            i--;
        }
    }
}
function ColiisionPlayerEnemies(GameEngine2) {
    for (let i = 0; i < GameEngine2.Enemies.length; i++) {
        if (GameEngine2.checkCollision(GameEngine2.Enemies[i], GameEngine2.Player)) {
            GameEngine2.Player.life -= GameEngine2.Enemies[i].dano;

        }
    }
    if (GameEngine2.Player.life <= 0) {
        GameEngine2.Sons[9].play();

    }
}
function sendData(data, url, type) {
    var XHR = new XMLHttpRequest();
    XHR.onloadend = function () {
        var response = XHR.response;
        //console.log(response);
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