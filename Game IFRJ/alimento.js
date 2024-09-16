class Alimento extends objetoJogo {
arqImagem = ['imagem.png', 'imagem3.png', 'imagem4.png'];

    cont; 
    #imagem;
    constructor(valor,...args){
      super(args);
      this.valor = valor;
      this.#imagem = new Image();
      this.cont = Math.round(Math.random()*2);
      this.#imagem.src = this.arqImagem[this.cont];
    }
    desenhar(){
      canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
