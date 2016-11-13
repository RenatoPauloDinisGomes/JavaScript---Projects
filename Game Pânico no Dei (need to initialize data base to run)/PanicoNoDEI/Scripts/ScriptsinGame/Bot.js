class Bot extends Character {
    constructor(x, y, image, NumeroSpritesX, NumeroSpritesY, vida, velocity, dano) {
        super(x, y, image, vida);
        this.vetor = [0, 0];
        this.dir = 0;
        this.Speed = velocity;
        this.NumSpritesX = NumeroSpritesX;
        this.NumSpritesY = NumeroSpritesY;
        this.width = this.image.width / NumeroSpritesX;
        this.height = this.image.height / NumeroSpritesY;

        //a colocar quando criar o objeto
        this.dano = dano;
        //Image data
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        g_ctx.drawImage(this.image, 0, 0, this.width, this.height);
        this.imgData = g_ctx.getImageData(0, 0, this.width, this.height);

    }

    drawLifeBar(ctx) {
        let w = this.width;
        let h = 8;

        ctx.save();
        //desenhar healthbar
        ctx.fillRect(this.x, this.y - h, w, h);
        ctx.fillStyle = "green";
        ctx.fillRect(this.x + 2, this.y - h + 2, (this.life * (w - 4)) / this.lifei, h - 4);

        ctx.restore();
    }

    updateVetor(Player2) {
        var MD = Math.sqrt(Math.pow(Player2.x - this.x, 2) + Math.pow(Player2.y - this.y, 2));
        var dx = (Player2.x - this.x) / MD;
        var dy = (Player2.y - this.y) / MD;
        this.vetor = [dx * this.Speed, dy * this.Speed];
        // console.log("3");
    }


}