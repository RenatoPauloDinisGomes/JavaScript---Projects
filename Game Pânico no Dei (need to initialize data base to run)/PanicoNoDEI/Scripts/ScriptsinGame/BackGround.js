/**
 * Created by User on 02/05/2016.
 */
class BackGround
{
    constructor(ctx,image, image2)
    {
        this.x=0;
        this.y=0;
        this.FrontTiles=[];
        this.width=ctx.canvas.width;
        this.height=ctx.canvas.height;
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        var tilelargura=image.width/30;
        this.imgDataSlow= g_ctx.getImageData(0, 0, this.width, this.height);
        this.imgDataSpeed=g_ctx.getImageData(0, 0, this.width, this.height);
        
        //aqui tem tudo
        //chao
        for(var x=0;x<Math.abs(ctx.canvas.width/tilelargura);x++)
        {
            for(var y=0;y<Math.abs(ctx.canvas.height/tilelargura);y++)
            {
                    g_ctx.drawImage(image,8*tilelargura,25*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        
        //bordas horizontal
        for(let a=1;a<Math.abs(ctx.canvas.width/tilelargura)-1;a++) {
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }
        
        //bordas Vertical
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++) {
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //poste L
        g_ctx.drawImage(image,1*tilelargura,9*tilelargura,tilelargura,tilelargura*3,tilelargura*10,5*tilelargura,tilelargura,3*tilelargura);
        g_ctx.drawImage(image,1*tilelargura,9*tilelargura,tilelargura,tilelargura*3,tilelargura*10,14*tilelargura,tilelargura,3*tilelargura);

        //poste R
        g_ctx.drawImage(image,1*tilelargura,9*tilelargura,tilelargura,tilelargura*3,tilelargura*33,5*tilelargura,tilelargura,3*tilelargura);
        g_ctx.drawImage(image,1*tilelargura,9*tilelargura,tilelargura,tilelargura*3,tilelargura*33,14*tilelargura,tilelargura,3*tilelargura);

        //TL
        g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,0,0,tilelargura,tilelargura);
        
        //TR
        g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,(Math.abs(ctx.canvas.width/tilelargura)-1)*tilelargura,0,tilelargura,tilelargura);
        
        //BL
        g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,0,(Math.abs(ctx.canvas.height/tilelargura)-1)*tilelargura,tilelargura,tilelargura);
        
        //BR
        g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,(Math.abs(ctx.canvas.width/tilelargura)-1)*tilelargura,(Math.abs(ctx.canvas.height/tilelargura)-1)*tilelargura,tilelargura,tilelargura);
        
        //Desenho de um terreno em relva que acelera o player
        //Desenho do retângulo envolvente
        //Linha superior e inferior sem primeiro e último bloco
        for(let a=15;a<30;a++) {
            g_ctx.drawImage(image,25*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,6*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,25*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        
        //Laterais
        for(let a=7;a<16;a++){
            g_ctx.drawImage(image,22*tilelargura,7*tilelargura,tilelargura,tilelargura,14*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,22*tilelargura,7*tilelargura,tilelargura,tilelargura,29*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,22*tilelargura,6*tilelargura,1*tilelargura,1*tilelargura,14*tilelargura,6*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,26*tilelargura,6*tilelargura,1*tilelargura,1*tilelargura,14*tilelargura,16*tilelargura,tilelargura,tilelargura);
        
        //Desenho do retângulo interior
        //Linha superior, intermédia e inferior sem primeiro e último bloco
        for(let a=16;a<28;a++) {
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,7*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,28*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Chão
        for(var x=16;x<28;x++)
        {
            for(var y=8;y<15;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

         //Caminhos
        for(let a=1;a<15;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,11*tilelargura,tilelargura,tilelargura);
        }
        for(let a=29;a<43;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,11*tilelargura,tilelargura,tilelargura);
        }
        for(let a=1;a<7;a++) {
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,21*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(let a=16;a<20;a++) {
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,21*tilelargura,a*tilelargura,tilelargura,tilelargura);
        } 
        for(let a=2;a<42;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,1*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,20*tilelargura,tilelargura,tilelargura);
        }
        for(let a=2;a<20;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,1*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,42*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,1*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,42*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,1*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,42*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,1*tilelargura,11*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,42*tilelargura,11*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,21*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,21*tilelargura,20*tilelargura,tilelargura,tilelargura);

        //Pedra
        g_ctx.drawImage(image2,6*tilelargura,11*tilelargura,2*tilelargura,2*tilelargura,21*tilelargura,10*tilelargura,2*tilelargura,2*tilelargura);
         //Pedras
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,20*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,15*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,24*tilelargura,7*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,27*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,16*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,25*tilelargura,10*tilelargura,tilelargura,tilelargura);
        this.imgDataGround=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);
       

        //colisoes desenhadas aqui
        //bordas horizontal
        for(let a=1;a<Math.abs(ctx.canvas.width/tilelargura)-1;a++) {

            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }
        
        //bordas Vertical
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++) {

            g_ctx.drawImage(image2,2*tilelargura,11*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image2,5*tilelargura,11*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //poste L
        g_ctx.drawImage(image,1*tilelargura,11*tilelargura,tilelargura,tilelargura,tilelargura*10,7*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,1*tilelargura,11*tilelargura,tilelargura,tilelargura,tilelargura*10,16*tilelargura,tilelargura,tilelargura);

        //poste R
        g_ctx.drawImage(image,1*tilelargura,11*tilelargura,tilelargura,tilelargura,tilelargura*33,7*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,1*tilelargura,11*tilelargura,tilelargura,tilelargura,tilelargura*33,16*tilelargura,tilelargura,tilelargura);

        //TL
        g_ctx.drawImage(image,10*tilelargura,16*tilelargura,tilelargura,tilelargura,0,0,tilelargura,tilelargura);
        
        //TR
        g_ctx.drawImage(image,8*tilelargura,21*tilelargura,tilelargura,tilelargura,(Math.abs(ctx.canvas.width/tilelargura)-1)*tilelargura,0,tilelargura,tilelargura);
        
        //BL
        g_ctx.drawImage(image,10*tilelargura,18*tilelargura,tilelargura,tilelargura,0,(Math.abs(ctx.canvas.height/tilelargura)-1)*tilelargura,tilelargura,tilelargura);
        
        //BR
        g_ctx.drawImage(image,8*tilelargura,23*tilelargura,tilelargura,tilelargura,(Math.abs(ctx.canvas.width/tilelargura)-1)*tilelargura,(Math.abs(ctx.canvas.height/tilelargura)-1)*tilelargura,tilelargura,tilelargura);
        
        //Pedra
        g_ctx.drawImage(image2,6*tilelargura,11*tilelargura,2*tilelargura,2*tilelargura,21*tilelargura,10*tilelargura,2*tilelargura,2*tilelargura);
        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Desenho do retângulo interior
        //Linha superior, intermédia e inferior sem primeiro e último bloco
        for(let a=16;a<28;a++) {
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,7*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,28*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Chão
        for(var x=16;x<28;x++)
        {
            for(var y=8;y<15;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        this.imgDataSpeed=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

                 //Caminhos
        for(let a=1;a<15;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,11*tilelargura,tilelargura,tilelargura);
        }
        for(let a=29;a<43;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,11*tilelargura,tilelargura,tilelargura);
        }
        for(let a=1;a<7;a++) {
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,21*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(let a=16;a<20;a++) {
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,21*tilelargura,a*tilelargura,tilelargura,tilelargura);
        } 
        for(let a=2;a<42;a++) {
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,1*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,20*tilelargura,tilelargura,tilelargura);
        }
        for(let a=2;a<20;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,1*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,42*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,1*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,42*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,1*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,42*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,1*tilelargura,11*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,42*tilelargura,11*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,21*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,21*tilelargura,20*tilelargura,tilelargura,tilelargura);
        this.imgDataSlow=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);
        // imagem - ximagem - yimagem - posx - posy -tamx - tamy- tilelenght
        let vetorPosteEC=[image,1,9,10,5,1,3,tilelargura];
        let vetorPosteDC=[image,1,9,10,14,1,3,tilelargura];
        let vetorPosteEB=[image,1,9,33,5,1,3,tilelargura];
        let vetorPosteDB=[image,1,9,33,14,1,3,tilelargura];
        this.FrontTiles.push(vetorPosteEC);
        this.FrontTiles.push(vetorPosteDC);
        this.FrontTiles.push(vetorPosteEB);
        this.FrontTiles.push(vetorPosteDB);
    }

    Level2(ctx,image)
    {
        this.FrontTiles = [];
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        var tilelargura=Math.abs(image.width/30);
       
        //Chão
        for(var x=0;x<Math.abs(ctx.canvas.width/tilelargura);x++)
        {
            for(var y=0;y<Math.abs(ctx.canvas.height/tilelargura);y++)
            {
                g_ctx.drawImage(image,1*tilelargura,7*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        
        //Linha superior e inferior sem primeiro e último bloco
        for(let a=1;a<Math.abs((ctx.canvas.width/tilelargura))-1;a++) {
            g_ctx.drawImage(image,6*tilelargura,20*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,20*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }
        
        //Laterais
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++){
            g_ctx.drawImage(image,6*tilelargura,21*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,21*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,5*tilelargura,20*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,7*tilelargura,20*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,5*tilelargura,22*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,6*tilelargura,22*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Desenho de um terreno em relva que abranda o player
        
        //Desenho do retângulo envolvente
        //Linha superior e inferior sem primeiro e último bloco
        for(let a=15;a<30;a++) {
            g_ctx.drawImage(image,25*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,6*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,25*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        
        //Laterais
        for(let a=7;a<16;a++){
            g_ctx.drawImage(image,22*tilelargura,7*tilelargura,tilelargura,tilelargura,14*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,22*tilelargura,7*tilelargura,tilelargura,tilelargura,29*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,22*tilelargura,6*tilelargura,1*tilelargura,1*tilelargura,14*tilelargura,6*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,26*tilelargura,6*tilelargura,1*tilelargura,1*tilelargura,14*tilelargura,16*tilelargura,tilelargura,tilelargura);
        
        //Desenho do retângulo interior
        //Linha superior, intermédia e inferior sem primeiro e último bloco
        for(let a=16;a<28;a++) {
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,7*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,28*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Chão
        for(var x=16;x<28;x++)
        {
            for(var y=8;y<15;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        
        //Caminho brutal
        //Árvore esquerda
        for(let a=4;a<8;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,6*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,10*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,8*tilelargura,6*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,8*tilelargura,10*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,3*tilelargura,6*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,3*tilelargura,10*tilelargura,tilelargura,tilelargura);
        for(let a=7;a<10;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,3*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,8*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Árvore direita
        for(let a=36;a<40;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,17*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,40*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,40*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,35*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,35*tilelargura,17*tilelargura,tilelargura,tilelargura);
        for(let a=14;a<17;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,35*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Ligação entre árvores
        for(let a=8;a<36;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,36*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,36*tilelargura,19*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,7*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,7*tilelargura,19*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,36*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,36*tilelargura,17*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<19;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,7*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,7*tilelargura,10*tilelargura,tilelargura,tilelargura);
        for(let a=4;a<13;a++){
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,36*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,36*tilelargura,13*tilelargura,tilelargura,tilelargura);
        for(let a=4;a<6;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,7*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,7*tilelargura,6*tilelargura,tilelargura,tilelargura);


        //Árvore canto superior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,4*tilelargura,7*tilelargura,tilelargura,tilelargura);
        for(let a=5;a<7;a++){
            g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,7*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,9*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,4*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,7*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,7*tilelargura,8*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,4*tilelargura,8*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,7*tilelargura,7*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,4*tilelargura,5*tilelargura,5*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,21*tilelargura,26*tilelargura,tilelargura,4*tilelargura,6*tilelargura,5*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,22*tilelargura,26*tilelargura,tilelargura,3*tilelargura,7*tilelargura,5*tilelargura,tilelargura,3*tilelargura);
        
        //Árvore canto inferior direito
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,36*tilelargura,14*tilelargura,tilelargura,tilelargura);
        for(let a=37;a<39;a++){
            g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,14*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,36*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,39*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,39*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,36*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,39*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,4*tilelargura,37*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,21*tilelargura,26*tilelargura,tilelargura,4*tilelargura,38*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,22*tilelargura,26*tilelargura,tilelargura,3*tilelargura,39*tilelargura,12*tilelargura,tilelargura,3*tilelargura);
        
        //Pedras
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,20*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,15*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,24*tilelargura,7*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,27*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,16*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,26*tilelargura,11*tilelargura,tilelargura,tilelargura,25*tilelargura,10*tilelargura,tilelargura,tilelargura);
        
        this.imgDataGround=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);



        //Controlo colisões
        //Linha superior sem primeiro e último bloco
        for(let a=1;a<Math.abs((ctx.canvas.width/tilelargura))-1;a++) {
            g_ctx.drawImage(image,6*tilelargura,20*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,20*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }
        
        //Laterais
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++){
            g_ctx.drawImage(image,6*tilelargura,21*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,21*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,5*tilelargura,20*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,7*tilelargura,20*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,5*tilelargura,22*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,6*tilelargura,22*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Árvores
        g_ctx.drawImage(image,20*tilelargura,29*tilelargura,2*tilelargura,tilelargura,5*tilelargura,8*tilelargura,2*tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,29*tilelargura,2*tilelargura,tilelargura,37*tilelargura,15*tilelargura,2*tilelargura,tilelargura);
        
        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Desenho do retângulo interior
        //Linha superior, intermédia e inferior sem primeiro e último bloco
        for(let a=16;a<28;a++) {
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,7*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,28*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,7*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,1*tilelargura,1*tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,28*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        //Chão
        for(var x=16;x<28;x++)
        {
            for(var y=8;y<15;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        this.imgDataSlow=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Caminho brutal
        //Árvore esquerda
        for(let a=4;a<8;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,6*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,10*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,8*tilelargura,6*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,8*tilelargura,10*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,3*tilelargura,6*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,3*tilelargura,10*tilelargura,tilelargura,tilelargura);
        for(let a=7;a<10;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,3*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,8*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Árvore direita
        for(let a=36;a<40;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,17*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,40*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,40*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,35*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,35*tilelargura,17*tilelargura,tilelargura,tilelargura);
        for(let a=14;a<17;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,35*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Ligação entre árvores
        for(let a=8;a<36;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,36*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,36*tilelargura,19*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,7*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,7*tilelargura,19*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,36*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,36*tilelargura,17*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<19;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,7*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,7*tilelargura,10*tilelargura,tilelargura,tilelargura);
        for(let a=4;a<13;a++){
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,36*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,36*tilelargura,13*tilelargura,tilelargura,tilelargura);
        for(let a=4;a<6;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,7*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,7*tilelargura,6*tilelargura,tilelargura,tilelargura);
        
        this.imgDataSpeed=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);
        // imagem - ximagem - yimagem - posx - posy -tamx - tamy- tilelenght
        let vetorArvore=[image,20,26,5,5,3,3,tilelargura];
        let vetorRaiz=[image,20,29,5,8,2,1,tilelargura];
        let vetorArvore2=[image,20,26,37,12,3,3,tilelargura];
        let vetorRaiz2=[image,20,29,37,15,2,1,tilelargura];
        this.FrontTiles.push(vetorArvore);
        this.FrontTiles.push(vetorRaiz);
        this.FrontTiles.push(vetorArvore2);
        this.FrontTiles.push(vetorRaiz2);
    }

    Level3(ctx,image,image2,image3)
    {
        this.FrontTiles = [];
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        var tilelargura=image3.width/30;

        //Chão
        for(var x=0;x<Math.abs(ctx.canvas.width/tilelargura);x++)
        {
            for(var y=0;y<Math.abs(ctx.canvas.height/tilelargura);y++)
            {
                g_ctx.drawImage(image3,12*tilelargura,6*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        //Relva lenta
         for(var x=3;x<22;x++)
        {
            for(var y=2;y<20;y++)
            {
                g_ctx.drawImage(image,14*tilelargura,28*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        for(var x=23;x<41;x++)
        {
            for(var y=2;y<20;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,25*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }


        //Linha superior e inferior sem primeiro e último bloco
        for(let a=1;a<Math.abs((ctx.canvas.width/tilelargura))-1;a++) {
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }
        
        //Laterais
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++){
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);

        //Árvore canto inferior direito
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,36*tilelargura,14*tilelargura,tilelargura,tilelargura);
        for(let a=37;a<39;a++){
            g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,14*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,36*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,39*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,39*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,36*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,39*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,4*tilelargura,37*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,21*tilelargura,26*tilelargura,tilelargura,4*tilelargura,38*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,22*tilelargura,26*tilelargura,tilelargura,3*tilelargura,39*tilelargura,12*tilelargura,tilelargura,3*tilelargura);

        //Árvore canto inferior esquerdo
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,24*tilelargura,14*tilelargura,tilelargura,tilelargura);
        for(let a=25;a<27;a++){
            g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,14*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,24*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,27*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,27*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,24*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,27*tilelargura,14*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,4*tilelargura,25*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,21*tilelargura,26*tilelargura,tilelargura,4*tilelargura,26*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,22*tilelargura,26*tilelargura,tilelargura,3*tilelargura,27*tilelargura,12*tilelargura,tilelargura,3*tilelargura);

        //Caminho à volta da árvore sinistra
        for(var x=7;x<13;x++)
        {
            for(var y=5;y<18;y++)
            {
                g_ctx.drawImage(image,14*tilelargura,28*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        g_ctx.drawImage(image,15*tilelargura,29*tilelargura,tilelargura,tilelargura,10*tilelargura,12*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<15;a++){
            g_ctx.drawImage(image,16*tilelargura,29*tilelargura,tilelargura,tilelargura,a*tilelargura,12*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=13;a<15;a++){
            g_ctx.drawImage(image3,15*tilelargura,0,tilelargura,tilelargura,10*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image3,15*tilelargura,1*tilelargura,tilelargura,tilelargura,10*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,17*tilelargura,29*tilelargura,tilelargura,tilelargura,15*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,1*tilelargura,tilelargura,tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,13*tilelargura,9*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,15*tilelargura,1*tilelargura,tilelargura,tilelargura,14*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,2*tilelargura,13*tilelargura,7*tilelargura,2*tilelargura,2*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,2*tilelargura,13*tilelargura,5*tilelargura,2*tilelargura,2*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,1*tilelargura,2*tilelargura,tilelargura,13*tilelargura,4*tilelargura,2*tilelargura,tilelargura);

        g_ctx.drawImage(image,16*tilelargura,29*tilelargura,2*tilelargura,tilelargura,12*tilelargura,3*tilelargura,2*tilelargura,tilelargura);
        g_ctx.drawImage(image,14*tilelargura,28*tilelargura,1*tilelargura,tilelargura,14*tilelargura,3*tilelargura,1*tilelargura,tilelargura);
        g_ctx.drawImage(image,14*tilelargura,28*tilelargura,1*tilelargura,tilelargura,12*tilelargura,4*tilelargura,1*tilelargura,tilelargura);
        for(let a=6;a<12;a++){
            g_ctx.drawImage(image,16*tilelargura,29*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,14*tilelargura,28*tilelargura,tilelargura,tilelargura,a*tilelargura,4*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,15*tilelargura,29*tilelargura,tilelargura,tilelargura,5*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,1*tilelargura,2*tilelargura,tilelargura,5*tilelargura,4*tilelargura,2*tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,5*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,7*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,9*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,11*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,13*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,15*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image,14*tilelargura,28*tilelargura,tilelargura,tilelargura,5*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,15*tilelargura,tilelargura,tilelargura,tilelargura,6*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,7*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,8*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,9*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,10*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,11*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,1*tilelargura,tilelargura,tilelargura,12*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,12*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,12*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,17*tilelargura,29*tilelargura,tilelargura,tilelargura,12*tilelargura,15*tilelargura,tilelargura,tilelargura);

        //Caminho bom
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,29*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,34*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,29*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,34*tilelargura,9*tilelargura,tilelargura,tilelargura);
        for(let a=30;a<34;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,9*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,18*tilelargura,tilelargura,tilelargura);
        }
        for(let a=10;a<18;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,29*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,34*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }

        for(let a=3;a<41;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,1*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,20*tilelargura,tilelargura,tilelargura);
        }
        for(let a=2;a<20;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,2*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,22*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,41*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,2*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,41*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,2*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,41*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,22*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,22*tilelargura,1*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,32*tilelargura,9*tilelargura,tilelargura,tilelargura);
        for(let a=2;a<8;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,32*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,32*tilelargura,1*tilelargura,tilelargura,tilelargura);

        //Arbusto
        g_ctx.drawImage(image,16*tilelargura,9*tilelargura,4*tilelargura,4*tilelargura,8*tilelargura,5*tilelargura,4*tilelargura,4*tilelargura);

        //Lago
        g_ctx.drawImage(image3,1*tilelargura,6*tilelargura,tilelargura,tilelargura,10*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,3*tilelargura,6*tilelargura,tilelargura,tilelargura,15*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,1*tilelargura,8*tilelargura,tilelargura,tilelargura,10*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,3*tilelargura,8*tilelargura,tilelargura,tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<15;a++){
            g_ctx.drawImage(image3,2*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,12*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,2*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=13;a<15;a++){
            g_ctx.drawImage(image3,1*tilelargura,7*tilelargura,tilelargura,tilelargura,10*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,3*tilelargura,7*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(var x=11;x<15;x++)
        {
            for(var y=13;y<15;y++)
            {
                g_ctx.drawImage(image3,2*tilelargura,7*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        //Árvore sinistra
        g_ctx.drawImage(image3,15*tilelargura,26*tilelargura,5*tilelargura,5*tilelargura,10*tilelargura,10*tilelargura,5*tilelargura,5*tilelargura);

        //À volta da árvore alta
        g_ctx.drawImage(image,20*tilelargura,9*tilelargura,tilelargura,tilelargura,30*tilelargura,10*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<17;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,30*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,33*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(var x=31;x<33;x++)
        {
            for(var y=11;y<17;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,33*tilelargura,10*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,32*tilelargura,10*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,31*tilelargura,10*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,30*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,31*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,32*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,33*tilelargura,17*tilelargura,tilelargura,tilelargura);

        //Fonte
        g_ctx.drawImage(image3,10*tilelargura,22*tilelargura,2*tilelargura,2*tilelargura,31*tilelargura,14*tilelargura,2*tilelargura,2*tilelargura);

        //Árvore alta
        g_ctx.drawImage(image3,20*tilelargura,1*tilelargura,tilelargura,2*tilelargura,30*tilelargura,8*tilelargura,tilelargura,2*tilelargura);
        g_ctx.drawImage(image3,21*tilelargura,0,tilelargura,5*tilelargura,31*tilelargura,7*tilelargura,tilelargura,5*tilelargura);
        g_ctx.drawImage(image3,22*tilelargura,0,tilelargura,5*tilelargura,32*tilelargura,7*tilelargura,tilelargura,5*tilelargura);
        g_ctx.drawImage(image3,23*tilelargura,0,tilelargura,4*tilelargura,33*tilelargura,7*tilelargura,tilelargura,4*tilelargura);

        this.imgDataGround=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Colisões
        //Lago
        g_ctx.drawImage(image3,1*tilelargura,6*tilelargura,3*tilelargura,3*tilelargura,11*tilelargura,12*tilelargura,3*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,1*tilelargura,6*tilelargura,tilelargura,tilelargura,10*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,3*tilelargura,6*tilelargura,tilelargura,tilelargura,15*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,1*tilelargura,8*tilelargura,tilelargura,tilelargura,10*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,3*tilelargura,8*tilelargura,tilelargura,tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<15;a++){
            g_ctx.drawImage(image3,2*tilelargura,6*tilelargura,tilelargura,tilelargura,a*tilelargura,12*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,2*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=13;a<15;a++){
            g_ctx.drawImage(image3,1*tilelargura,7*tilelargura,tilelargura,tilelargura,10*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,3*tilelargura,7*tilelargura,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(var x=11;x<15;x++)
        {
            for(var y=13;y<15;y++)
            {
                g_ctx.drawImage(image3,2*tilelargura,7*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        //Árvores
        g_ctx.drawImage(image,20*tilelargura,29*tilelargura,2*tilelargura,tilelargura,25*tilelargura,15*tilelargura,2*tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,29*tilelargura,2*tilelargura,tilelargura,37*tilelargura,15*tilelargura,2*tilelargura,tilelargura);

        //Fonte
        g_ctx.drawImage(image3,10*tilelargura,22*tilelargura,2*tilelargura,2*tilelargura,31*tilelargura,14*tilelargura,2*tilelargura,2*tilelargura);

        //Linha superior e inferior sem primeiro e último bloco
        for(let a=1;a<Math.abs((ctx.canvas.width/tilelargura))-1;a++) {
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,0,tilelargura,tilelargura);
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        }

        //Laterais
        for(let a=1;a<Math.abs(ctx.canvas.height/tilelargura)-1;a++){
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,0,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,tilelargura,tilelargura,ctx.canvas.width-tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        //Canto superior esquerdo
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image3,27*tilelargura,1*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);

        //Árvore alta
        g_ctx.drawImage(image3,21*tilelargura,4*tilelargura,2*tilelargura,tilelargura,31*tilelargura,11*tilelargura,2*tilelargura,tilelargura);

        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Caminho à volta da árvore sinistra
        g_ctx.drawImage(image,15*tilelargura,29*tilelargura,tilelargura,tilelargura,10*tilelargura,12*tilelargura,tilelargura,tilelargura);
        for(let a=11;a<15;a++){
            g_ctx.drawImage(image,16*tilelargura,29*tilelargura,tilelargura,tilelargura,a*tilelargura,12*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,a*tilelargura,15*tilelargura,tilelargura,tilelargura);
        }
        for(let a=13;a<15;a++){
            g_ctx.drawImage(image3,15*tilelargura,0,tilelargura,tilelargura,10*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,15*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image3,15*tilelargura,1*tilelargura,tilelargura,tilelargura,10*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,17*tilelargura,29*tilelargura,tilelargura,tilelargura,15*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,1*tilelargura,tilelargura,tilelargura,15*tilelargura,15*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,13*tilelargura,9*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,15*tilelargura,1*tilelargura,tilelargura,tilelargura,14*tilelargura,12*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,2*tilelargura,13*tilelargura,7*tilelargura,2*tilelargura,2*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,2*tilelargura,13*tilelargura,5*tilelargura,2*tilelargura,2*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,1*tilelargura,2*tilelargura,tilelargura,13*tilelargura,4*tilelargura,2*tilelargura,tilelargura);

        g_ctx.drawImage(image,16*tilelargura,29*tilelargura,2*tilelargura,tilelargura,12*tilelargura,3*tilelargura,2*tilelargura,tilelargura);
        for(let a=6;a<12;a++){
            g_ctx.drawImage(image,16*tilelargura,29*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,15*tilelargura,29*tilelargura,tilelargura,tilelargura,5*tilelargura,3*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,1*tilelargura,2*tilelargura,tilelargura,5*tilelargura,4*tilelargura,2*tilelargura,tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,5*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,7*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,9*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,11*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,13*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image3,18*tilelargura,0,2*tilelargura,3*tilelargura,5*tilelargura,15*tilelargura,2*tilelargura,3*tilelargura);
        g_ctx.drawImage(image,14*tilelargura,28*tilelargura,tilelargura,tilelargura,5*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,15*tilelargura,tilelargura,tilelargura,tilelargura,6*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,7*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,8*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,9*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,10*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,16*tilelargura,1*tilelargura,tilelargura,tilelargura,11*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,1*tilelargura,tilelargura,tilelargura,12*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,12*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,17*tilelargura,0,tilelargura,tilelargura,12*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,17*tilelargura,29*tilelargura,tilelargura,tilelargura,12*tilelargura,15*tilelargura,tilelargura,tilelargura);
        
        this.imgDataSlow=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

         //Caminho bom
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,29*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,34*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,29*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,34*tilelargura,9*tilelargura,tilelargura,tilelargura);
        for(let a=30;a<34;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,9*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,18*tilelargura,tilelargura,tilelargura);
        }
        for(let a=10;a<18;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,29*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,34*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }

        for(let a=3;a<41;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,1*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,25*tilelargura,tilelargura,tilelargura,a*tilelargura,20*tilelargura,tilelargura,tilelargura);
        }
        for(let a=2;a<20;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,2*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,22*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,41*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,2*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,41*tilelargura,1*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,2*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,41*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,22*tilelargura,20*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,22*tilelargura,1*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,32*tilelargura,9*tilelargura,tilelargura,tilelargura);
        for(let a=2;a<8;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,32*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,32*tilelargura,1*tilelargura,tilelargura,tilelargura);
        
        this.imgDataSpeed=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        // imagem - ximagem - yimagem - posx - posy -tamx - tamy- tilelenght
        let vetorArvore=[image3,21,0,31,7,2,5,tilelargura];
        let vetorArvoreA=[image3,20,1,30,8,1,2,tilelargura];
        let vetorArvoreB=[image3,23,0,33,7,1,4,tilelargura];
        let vetorArvore2=[image3,15,26,10,10,5,4,tilelargura];
        let vetorArbusto=[image,16,9,8,5,4,4,tilelargura];
        let vetorArvore3=[image,20,26,37,12,2,4,tilelargura];
        let vetorArvore3A=[image,22,26,39,12,1,3,tilelargura];
        let vetorArvore4=[image,20,26,25,12,2,4,tilelargura];
        let vetorArvore4A=[image,22,26,27,12,1,3,tilelargura];
        this.FrontTiles.push(vetorArvore);
        this.FrontTiles.push(vetorArvoreA);
        this.FrontTiles.push(vetorArvoreB);
        this.FrontTiles.push(vetorArvore2);
        this.FrontTiles.push(vetorArbusto);
        this.FrontTiles.push(vetorArvore3);
        this.FrontTiles.push(vetorArvore3A);
        this.FrontTiles.push(vetorArvore4);
        this.FrontTiles.push(vetorArvore4A);
    }
 
    Level4(ctx,image,image2,image3)
    {
        this.FrontTiles = [];
        let g_cv = document.createElement("canvas");
        g_cv.width = this.width;
        g_cv.height = this.height;
        let g_ctx = g_cv.getContext("2d");
        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        var tilelargura=image3.width/30;

        //Chão
        for(var x=0;x<Math.abs(ctx.canvas.width/tilelargura);x++)
        {
            for(var y=0;y<Math.abs(ctx.canvas.height/tilelargura);y++)
            {
                g_ctx.drawImage(image,3*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        //Barreiras
        for(let a=1;a<43;a++){
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,0*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,21*tilelargura,tilelargura,tilelargura);
        }
        for(let a=1;a<21;a++){
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,0*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,43*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        //Canto superior esquerdo
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);

        //Relva
        for(var x=27;x<40;x++)
        {
            for(var y=4;y<19;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,27*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,tilelargura,tilelargura,39*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,27*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,39*tilelargura,18*tilelargura,tilelargura,tilelargura);
        for(let a=28;a<39;a++){
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,4*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,18*tilelargura,tilelargura,tilelargura);
        }
        for(let a=5;a<18;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,27*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,39*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }

        for(let a=26;a<32;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=35;a<41;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=4;a<10;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,26*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(let a=12;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,26*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }

        //Salas
        for(var x=22;x<26;x++)
        {
            for(var y=4;y<8;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        for(let a=21;a<26;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,8*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }

        for(var x=22;x<26;x++)
        {
            for(var y=9;y<13;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        for(var x=22;x<26;x++)
        {
            for(var y=14;y<19;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }         

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,7*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,12*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,18*tilelargura,tilelargura,tilelargura);

        for(var x=14;x<18;x++)
        {
            for(var y=4;y<8;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        for(var x=14;x<18;x++)
        {
            for(var y=9;y<13;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        for(var x=14;x<18;x++)
        {
            for(var y=14;y<19;y++)
            {
                g_ctx.drawImage(image3,5*tilelargura,24*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }

        for(let a=3;a<10;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,13*tilelargura,a*tilelargura,tilelargura,tilelargura);

        }
        for(let a=12;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,13*tilelargura,a*tilelargura,tilelargura,tilelargura);

        } 

        for(let a=13;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,8*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,7*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,12*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,18*tilelargura,tilelargura,tilelargura); 

        //Relva
        for(var x=1;x<13;x++)
        {
            for(var y=4;y<19;y++)
            {
                g_ctx.drawImage(image,23*tilelargura,3*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        g_ctx.drawImage(image,25*tilelargura,8*tilelargura,tilelargura,tilelargura,1*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,8*tilelargura,tilelargura,tilelargura,12*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,1*tilelargura,18*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,12*tilelargura,18*tilelargura,tilelargura,tilelargura);
        for(let a=2;a<12;a++){
            g_ctx.drawImage(image,26*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,4*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,18*tilelargura,tilelargura,tilelargura);
        }
        for(let a=5;a<18;a++){
            g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,1*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,12*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }

        for(let a=1;a<6;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }        

        for(let a=32;a<36;a++){
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,6*tilelargura,23*tilelargura,tilelargura,tilelargura,a*tilelargura,17*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,7*tilelargura,23*tilelargura,tilelargura,tilelargura,36*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,7*tilelargura,25*tilelargura,tilelargura,tilelargura,36*tilelargura,17*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,23*tilelargura,tilelargura,tilelargura,31*tilelargura,13*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,5*tilelargura,25*tilelargura,tilelargura,tilelargura,31*tilelargura,17*tilelargura,tilelargura,tilelargura);
        for(let a=14;a<17;a++){
            g_ctx.drawImage(image,5*tilelargura,24*tilelargura,tilelargura,tilelargura,31*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,7*tilelargura,24*tilelargura,tilelargura,tilelargura,36*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
       //Árvore
        for(let a=33;a<35;a++){
            g_ctx.drawImage(image,21*tilelargura,9*tilelargura,tilelargura,tilelargura,a*tilelargura,14*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image,27*tilelargura,10*tilelargura,tilelargura,tilelargura,a*tilelargura,16*tilelargura,tilelargura,tilelargura);
        }
        g_ctx.drawImage(image,20*tilelargura,9*tilelargura,tilelargura,tilelargura,32*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,9*tilelargura,tilelargura,tilelargura,32*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,24*tilelargura,8*tilelargura,tilelargura,tilelargura,35*tilelargura,16*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,23*tilelargura,9*tilelargura,tilelargura,tilelargura,35*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,22*tilelargura,9*tilelargura,tilelargura,tilelargura,32*tilelargura,15*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,21*tilelargura,11*tilelargura,tilelargura,tilelargura,35*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,4*tilelargura,33*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,21*tilelargura,26*tilelargura,tilelargura,4*tilelargura,34*tilelargura,12*tilelargura,tilelargura,4*tilelargura);
        g_ctx.drawImage(image,22*tilelargura,26*tilelargura,tilelargura,3*tilelargura,35*tilelargura,12*tilelargura,tilelargura,3*tilelargura);

        this.imgDataGround=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        //Colisões
        //Barreiras
        for(let a=1;a<43;a++){
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,0*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,21*tilelargura,tilelargura,tilelargura);
        }
        for(let a=1;a<21;a++){
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,0*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,tilelargura,tilelargura,43*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        //Canto superior esquerdo
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,0,0,tilelargura,tilelargura);
        
        //Canto superior direito
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,0,tilelargura,tilelargura);
        
        //Canto inferior esquerdo
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,0,ctx.canvas.height-tilelargura,tilelargura,tilelargura);
        
        //Canto inferior direito
        g_ctx.drawImage(image3,4*tilelargura,8*tilelargura,1*tilelargura,1*tilelargura,ctx.canvas.width-tilelargura,ctx.canvas.height-tilelargura,tilelargura,tilelargura);

        for(let a=26;a<32;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=35;a<41;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=4;a<10;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,26*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(let a=12;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,26*tilelargura,a*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,40*tilelargura,a*tilelargura,tilelargura,tilelargura);
        }
        for(let a=21;a<26;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,8*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,7*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,12*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,21*tilelargura,18*tilelargura,tilelargura,tilelargura);

        for(let a=3;a<10;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,13*tilelargura,a*tilelargura,tilelargura,tilelargura);

        }
        for(let a=12;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,13*tilelargura,a*tilelargura,tilelargura,tilelargura);

        } 

        for(let a=13;a<19;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,8*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,13*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        } 

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,4*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,7*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,9*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,12*tilelargura,tilelargura,tilelargura);

        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,14*tilelargura,tilelargura,tilelargura);
        g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,18*tilelargura,18*tilelargura,tilelargura,tilelargura);

        for(let a=1;a<6;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }
        for(let a=8;a<15;a++){
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,3*tilelargura,tilelargura,tilelargura);
            g_ctx.drawImage(image3,5*tilelargura,8*tilelargura,tilelargura,tilelargura,a*tilelargura,19*tilelargura,tilelargura,tilelargura);
        }          

        for(var x=32;x<36;x++)
        {
            for(var y=13;y<16;y++)
            {
                g_ctx.drawImage(image,20*tilelargura,26*tilelargura,tilelargura,tilelargura,x*tilelargura,y*tilelargura,tilelargura,tilelargura);
            }
        }
        g_ctx.drawImage(image,20*tilelargura,29*tilelargura,2*tilelargura,tilelargura,33*tilelargura,15*tilelargura,2*tilelargura,tilelargura);

        this.imgData=g_ctx.getImageData(0,0,this.width,this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        this.imgDataSlow=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        this.imgDataSpeed=g_ctx.getImageData(0, 0, this.width, this.height);
        g_ctx.clearRect(0,0,this.width,this.height);

        let arvore=[image,20,26,33,12,3,4,tilelargura];
        this.FrontTiles.push(arvore);
    }
}
