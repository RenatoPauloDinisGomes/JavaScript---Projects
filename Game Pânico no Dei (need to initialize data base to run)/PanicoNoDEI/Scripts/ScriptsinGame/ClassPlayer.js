class Player extends Character {
    constructor(x, y, image, vida) {
        super(x, y, image, vida);
        this.boost = false;
        this.Speed = 4;
        //controls numero da tecla "Keycode"
        this.key_L = 37;
        this.key_R = 39;
        this.key_U = 38;
        this.key_D = 40;
        this.NumeroBalas = 20;
        this.shots = [];
        this.width = this.image.width / 4;
        this.height = this.image.height / 4;
        //Image data
        let canvasImageData = document.createElement("canvas");
        canvasImageData.width = this.width;
        canvasImageData.height = this.height;
        let contextoImageData = canvasImageData.getContext("2d");
        contextoImageData.drawImage(this.image, 0, 0, this.width, this.height);
        this.imgData = contextoImageData.getImageData(0, 0, this.width, this.height);
    }

}
