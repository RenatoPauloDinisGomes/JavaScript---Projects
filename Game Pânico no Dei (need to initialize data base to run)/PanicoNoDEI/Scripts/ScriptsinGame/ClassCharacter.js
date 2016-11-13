class Character {
    constructor(x, y, image, vida) {

        this.life = vida || 1000;
        this.lifei = this.life;
        this.dir = 0;
        this.x = x;
        this.xini = x;
        this.y = y;
        this.yini = y;
        this.frameSprite = 0;
        this.image = image;
    }
}


