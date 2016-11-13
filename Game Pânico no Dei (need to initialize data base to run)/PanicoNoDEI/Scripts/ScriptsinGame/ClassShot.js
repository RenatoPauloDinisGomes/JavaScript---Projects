/**
 * Created by User on 21/04/2016.
 */
class Shot
{
    constructor(x,y,dx,dy,imagem){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.imagem=imagem;

        //mudar dano ao criar objeto
        this.dano=500;
        this.width=this.imagem.width/2;
        this.height=this.imagem.height/2;

        //Image data
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        g_ctx.drawImage(this.imagem, 0, 0, this.width, this.height);
        this.imgData = g_ctx.getImageData(0, 0, this.width, this.height);

    }

}