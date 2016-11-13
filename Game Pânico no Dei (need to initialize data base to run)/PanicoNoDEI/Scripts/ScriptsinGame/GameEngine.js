class GameEngine {
    //dispacher dos events listeners NAO SEI FAZER / canvas aux como variavel desta class CHECK/ imagedata e imAGE so preciso 1 ?//dif levels numero

    constructor() {
        this.Player = null;
        this.ImagensACarregar = [];
        this.Sons = [];
        this.Enemies = [];
        this.Bloods = [];
        this.Explosions = [];
        this.ctxP;
        this.key_right = false;
        this.key_left = false;
        this.key_up = false;
        this.key_down = false;
        this.BackgroundLevel;
        this.GameOverAuxX = 0;
        this.GameOverAuxY = 0;
        this.level = 1;
        //  this.danos=[]
        this.score = 0;
        this.ScoreEntrada = 0;
        this.dificulty = 1;
        this.NumerosEnemies = 10;
        let canvas = document.createElement("CANVAS");
        canvas.width = 1400;
        canvas.height = 700;
        this.ctx = canvas.getContext("2d");
        this.pause = false;
        this.InTransition = true;
        this.TempTransition = 150;
        this.FrameAtual = 0;
    }

    level1() {
        // let stor=new Bot(400,400,this.ImagensACarregar[4],9,4,2000,2,3);
        //this.Enemies.push(stor);
        //  let Estudante= new Bot(500,500,this.ImagensACarregar[7],9,4,5000,1.3,2);
        // this.Enemies.push(Estudante);
        this.Player.x = this.Player.xini;
        this.Player.y = this.Player.yini;
        this.Player.NumeroBalas = 100;
        this.NumerosEnemies = 1;
    }

    level2() {
        // let Estudante= new Bot(500,500,this.ImagensACarregar[7],9,4,5000,2,5);
        // this.Enemies.push(Estudante);
        this.Player.x = this.Player.xini;
        this.Player.y = this.Player.yini;
        this.Player.life = this.Player.lifei;
        this.Player.NumeroBalas = 300;
        this.NumerosEnemies = 1;

    }

    level3() {
        this.Player.x = this.Player.xini;
        this.Player.y = this.Player.yini;
        this.Player.life = this.Player.lifei;
        this.Player.NumeroBalas = 400;
        this.NumerosEnemies = 1;
    }

    level4() {
        this.Player.x = this.Player.xini;
        this.Player.y = this.Player.yini;
        this.Player.life = this.Player.lifei;
        this.Player.NumeroBalas = 500;
        this.NumerosEnemies = 1;
    }

    resetAll() {
        this.FrameAtual = 0;
        this.Enemies = [];
        this.Player.shots = [];
        this.Bloods = [];
        this.score = 0;
        this.Explosions = [];
        switch (this.level) {
            case 1:
                this.Player.life = this.Player.lifei;
                this.Player.x = this.Player.xini;
                this.Player.y = this.Player.yini;
                this.Player.NumeroBalas = 200;
                this.NumerosEnemies = 10;
                break;
            case 2:
                this.Player.life = this.Player.lifei;
                this.Player.x = this.Player.xini;
                this.Player.y = this.Player.yini;
                this.Player.NumeroBalas = 300;
                this.NumerosEnemies = 20;
                break;
            case 3:
                this.Player.life = this.Player.lifei;
                this.Player.x = this.Player.xini;
                this.Player.y = this.Player.yini;
                this.Player.NumeroBalas = 400;
                this.NumerosEnemies = 30;
                break;
            case 4:
                this.Player.life = this.Player.lifei;
                this.Player.x = this.Player.xini;
                this.Player.y = this.Player.yini;
                this.Player.NumeroBalas = 500;
                this.NumerosEnemies = 40;
                break;
            default:

        }
    }

    updateLevel() {
        this.InTransition = true;
        switch (this.level) {
            case 1:
                this.level2();
                this.BackgroundLevel.Level2(this.ctxP, this.ImagensACarregar[11]);
                this.level++;
                break;
            case 2:
                this.level3();
                this.BackgroundLevel.Level3(this.ctxP, this.ImagensACarregar[11], this.ImagensACarregar[13], this.ImagensACarregar[14]);
                this.level++;
                break;
            case 3:
                this.level4();
                this.BackgroundLevel.Level4(this.ctxP, this.ImagensACarregar[11], this.ImagensACarregar[13], this.ImagensACarregar[14]);
                this.level++;
                break;
            case 4:
                break;
        }
    }

    DrawAll() {
        if (this.NumerosEnemies == 0 && this.Enemies.length == 0) {
            this.updateLevel();
        }
        if (this.FrameAtual > 60 * this.dificulty && this.NumerosEnemies > 0) {
            if (this.level == 1) {
                let x = Math.floor((Math.random() * (this.ctxP.canvas.width - 200)) + 1);
                let y = Math.floor((Math.random() * (this.ctxP.canvas.height - 100)) + 1);
                var botaux = new Bot(x, y, this.ImagensACarregar[2], 3, 4, 1000, 1, 1 / this.dificulty);
                botaux.frameSprite = Math.floor((Math.random() * 3) + 1);
                if (!(this.checkCollision(botaux, this.BackgroundLevel))) {
                    this.Enemies.push(botaux);
                    this.FrameAtual = 0;
                    this.NumerosEnemies--;
                }

            } else if (this.level == 2) {
                let x = Math.floor((Math.random() * (this.ctxP.canvas.width - 200)) + 1);
                let y = Math.floor((Math.random() * (this.ctxP.canvas.height - 100)) + 1);
                var botaux = new Bot(x, y, this.ImagensACarregar[7], 9, 4, 2000, 2, 2 / this.dificulty);
                //var botaux=new Bot(x,y,this.ImagensACarregar[2],3,4,1000,1,1/this.dificulty);
                botaux.frameSprite = Math.floor((Math.random() * 3) + 1);
                if (!(this.checkCollision(botaux, this.BackgroundLevel))) {
                    this.Enemies.push(botaux);
                    this.FrameAtual = 0;
                    this.NumerosEnemies--;
                }

            } else if (this.level == 3) {
                //    let stor=new Bot(400,400,this.ImagensACarregar[4],9,4,2000,2,3);
                //this.Enemies.push(stor);
                let x = Math.floor((Math.random() * (this.ctxP.canvas.width - 200)) + 1);
                let y = Math.floor((Math.random() * (this.ctxP.canvas.height - 100)) + 1);
                var botaux = new Bot(x, y, this.ImagensACarregar[4], 9, 4, 2000, 2, 2 / this.dificulty);
                // var botaux1=new Bot(x,y,this.ImagensACarregar[7],9,4,2000,2,2/this.dificulty);
                //  var botaux2=new Bot(x,y,this.ImagensACarregar[2],3,4,1000,1,1/this.dificulty);
                //var botaux=new Bot(x,y,this.ImagensACarregar[2],3,4,1000,1,1/this.dificulty);
                botaux.frameSprite = Math.floor((Math.random() * 3) + 1);
                if (!(this.checkCollision(botaux, this.BackgroundLevel))) {
                    this.Enemies.push(botaux);
                    //   this.Enemies.push(botaux2);
                    //this.Enemies.push(botaux1);
                    this.FrameAtual = 0;
                    this.NumerosEnemies--;
                }
            } else {
                let x = Math.floor((Math.random() * (this.ctxP.canvas.width - 200)) + 1);
                let y = Math.floor((Math.random() * (this.ctxP.canvas.height - 100)) + 1);
                var botaux = new Bot(x, y, this.ImagensACarregar[4], 9, 4, 2000, 2, 2 / this.dificulty);
                //var botaux=new Bot(x,y,this.ImagensACarregar[2],3,4,1000,1,1/this.dificulty);
                botaux.frameSprite = Math.floor((Math.random() * 3) + 1);
                if (!(this.checkCollision(botaux, this.BackgroundLevel))) {
                    this.Enemies.push(botaux);
                    this.FrameAtual = 0;
                    this.NumerosEnemies--;
                }
            }
        }
        //atualizar speed
        if ((this.checkColisionSloww(this.Player, this.BackgroundLevel)) && !(this.checkColisionSpeed(this.Player, this.BackgroundLevel))) {
            this.Player.Speed = 2;
        } else if (this.checkColisionSpeed(this.Player, this.BackgroundLevel) && !((this.checkColisionSloww(this.Player, this.BackgroundLevel)))) {
            this.Player.Speed = 6;
        } else {
            this.Player.Speed = 4;
        }
        let frameEsquerda = Math.floor(this.Player.frameSprite) % 4;
        //desenahr background
        this.ctx.putImageData(this.BackgroundLevel.imgDataGround, 0, 0);
        this.UpdateHUD(this.ctx);
        //desenhar sangue dos mortos
        for (let k = 0; k < this.Bloods.length; k++) {
            this.ctx.drawImage(this.Bloods[k][2], this.Bloods[k][0], this.Bloods[k][1], this.Bloods[k][3], this.Bloods[k][4]);
        }

        //desenha o player aqui
        this.ctx.drawImage(this.Player.image, this.Player.dir * this.Player.width, frameEsquerda * this.Player.height, this.Player.width, this.Player.height, this.Player.x, this.Player.y, this.Player.width, this.Player.height);

        //desenhar tiros
        for (let i = 0; i < this.Player.shots.length; i++) {
            if (!(this.Player.shots[i].x >= this.ctx.canvas.width + 20 || this.Player.shots[i].y >= this.ctx.canvas.height + 20 || this.Player.shots[i].x < -this.Player.shots[i].imagem.width * 2 || this.Player.shots[i].y < -this.Player.shots[i].imagem.height * 3)) {
                this.Player.shots[i].x += this.Player.shots[i].dx * 7;
                this.Player.shots[i].y += this.Player.shots[i].dy * 7;
                this.ctx.drawImage(this.Player.shots[i].imagem, this.Player.shots[i].x, this.Player.shots[i].y, this.Player.shots[i].width, this.Player.shots[i].height);
            } else {
                //remover os que chegaram fora das bordas
                this.Player.shots.splice(i, 1);
            }
        }

        // desenhar Enemies
        let frameEsquerdab = 1;

        for (let i = 0; i < this.Enemies.length; i++) {

            frameEsquerdab = Math.floor(this.Enemies[i].frameSprite) % this.Enemies[i].NumSpritesX;
            //health bar
            this.Enemies[i].drawLifeBar(this.ctx);
            //Enemie
            this.ctx.drawImage(this.Enemies[i].image, frameEsquerdab * this.Enemies[i].width + 1, this.Enemies[i].dir * this.Enemies[i].height + 1, this.Enemies[i].width, this.Enemies[i].height, this.Enemies[i].x, this.Enemies[i].y, this.Enemies[i].width, this.Enemies[i].height);

        }

        //front tiles
        for (let i = 0; i < this.BackgroundLevel.FrontTiles.length; i++) {
            this.ctx.drawImage(this.BackgroundLevel.FrontTiles[i][0], this.BackgroundLevel.FrontTiles[i][1] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][2] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][5] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][6] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][3] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][4] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][5] * this.BackgroundLevel.FrontTiles[i][7], this.BackgroundLevel.FrontTiles[i][6] * this.BackgroundLevel.FrontTiles[i][7]);
        }
        //desenhar bombas
        for (let g = 0; g < this.Explosions.length; g++) {
            //frame da bomba
            let framW = this.Explosions[g][2].width / this.Explosions[g][3];
            let framH = this.Explosions[g][2].height / this.Explosions[g][4];

            let posy = Math.floor(this.Explosions[g][5] / this.Explosions[g][3]);
            let posx = Math.floor(this.Explosions[g][5] % this.Explosions[g][3]);
            if (!(posy > this.Explosions[g][4])) {
                this.ctx.drawImage(this.Explosions[g][2], framW * posx, framH * posy, framW, framH, this.Explosions[g][0], this.Explosions[g][1], framW / 2, framH / 2);
                this.Explosions[g][5] += 0.2;
            } else {
                this.Explosions.splice(g, 1);
                g--;
            }
        }
        this.ctxP.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctxP.drawImage(this.ctx.canvas, 0, 0);
        this.FrameAtual++;
        //  console.log(this.FrameAtual);
    }

    UpdateHUD(ctx) {
        let w = 200;
        let x = 30;
        let y = 30;
        ctx.save();
        //Score
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + this.score, 10 + x, 90 + y);
        //Life Player
        ctx.fillRect(80 + x, 7 + y, w, 25);
        ctx.fillText("Life: ", 10 + x, 30 + y);
        ctx.fillStyle = "red";
        if ((this.Player.life * (w - 4)) / this.Player.lifei > 0) {
            ctx.fillRect(80 + 2 + x, 7 + 2 + y, (this.Player.life * (w - 4)) / this.Player.lifei, 21);
        }
        ctx.restore();
        //Balas left
        ctx.font = "30px Arial";
        ctx.fillText("Bullets: " + this.Player.NumeroBalas, 10 + x, 60 + y);
        ctx.fillText("Enemies Left: " + (this.NumerosEnemies + this.Enemies.length), 10 + x, 120 + y);

    }

    checkCollision(element, element2) {
        if (this.checkCollisionBoundingBox(element, element2)) {
            if (this.checkCollisionPixelByPixel(element, element2)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    checkCollisionBoundingBox(rect1, rect2) {
        //   console.log(rect1.width+" "+rect2.width)
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            //console.log("colisao na caixa");
            return true;
        } else {
            return false;
        }
    }

    checkColisionSloww(element, element2) {
        let x_left = Math.floor(Math.max(element2.x, element.x));
        let x_right = Math.floor(Math.min(element2.x + element2.width, element.x + element.width));
        let y_top = Math.floor(Math.max(element2.y, element.y));
        let y_bottom = Math.floor(Math.min(element2.y + element2.height, element.y + element.height));

        for (let y = y_top; y < y_bottom; y++) {
            for (let x = x_left; x < x_right; x++) {
                let x_0 = Math.round(x - element2.x);
                let y_0 = Math.round(y - element2.y);
                let n_pix = y_0 * element2.width + x_0; //n pixel to check
                let pix_op = element2.imgDataSlow.data[4 * n_pix + 3]; //opacity (R G B A)

                let element_x_0 = Math.round(x - element.x);
                let element_y_0 = Math.round(y - element.y);
                let element_n_pix = element_y_0 * element.width + element_x_0; //n pixel to check
                let element_pix_op = element.imgData.data[4 * element_n_pix + 3]; //opacity (R G B A)

                if (pix_op == 255 && element_pix_op == 255) {
                    /*Debug*/
                    // console.log("colisao no pixel");
                    return true;
                }
            }
        }
        return false;
    }

    checkColisionSpeed(element, element2) {
        let x_left = Math.floor(Math.max(element2.x, element.x));
        let x_right = Math.floor(Math.min(element2.x + element2.width, element.x + element.width));
        let y_top = Math.floor(Math.max(element2.y, element.y));
        let y_bottom = Math.floor(Math.min(element2.y + element2.height, element.y + element.height));

        for (let y = y_top; y < y_bottom; y++) {
            for (let x = x_left; x < x_right; x++) {
                let x_0 = Math.round(x - element2.x);
                let y_0 = Math.round(y - element2.y);
                let n_pix = y_0 * element2.width + x_0; //n pixel to check
                let pix_op = element2.imgDataSpeed.data[4 * n_pix + 3]; //opacity (R G B A)

                let element_x_0 = Math.round(x - element.x);
                let element_y_0 = Math.round(y - element.y);
                let element_n_pix = element_y_0 * element.width + element_x_0; //n pixel to check
                let element_pix_op = element.imgData.data[4 * element_n_pix + 3]; //opacity (R G B A)

                if (pix_op == 255 && element_pix_op == 255) {
                    /*Debug*/
                    // console.log("colisao no pixel");
                    return true;
                }
            }
        }
        return false;
    }


    checkCollisionPixelByPixel(element, element2) {
        let x_left = Math.floor(Math.max(element2.x, element.x));
        let x_right = Math.floor(Math.min(element2.x + element2.width, element.x + element.width));
        let y_top = Math.floor(Math.max(element2.y, element.y));
        let y_bottom = Math.floor(Math.min(element2.y + element2.height, element.y + element.height));

        for (let y = y_top; y < y_bottom; y++) {
            for (let x = x_left; x < x_right; x++) {
                let x_0 = Math.round(x - element2.x);
                let y_0 = Math.round(y - element2.y);
                let n_pix = y_0 * element2.width + x_0; //n pixel to check
                let pix_op = element2.imgData.data[4 * n_pix + 3]; //opacity (R G B A)

                let element_x_0 = Math.round(x - element.x);
                let element_y_0 = Math.round(y - element.y);
                let element_n_pix = element_y_0 * element.width + element_x_0; //n pixel to check
                let element_pix_op = element.imgData.data[4 * element_n_pix + 3]; //opacity (R G B A)

                if (pix_op == 255 && element_pix_op == 255) {
                    /*Debug*/
                    // console.log("colisao no pixel");
                    return true;
                }
            }
        }
        return false;
    }

}