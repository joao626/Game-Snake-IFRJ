const placar = {
  largura:800,
  altura:60,
  cor:"purple",
  pontos: 0,
  qtdPontos: 0,
  corTexto:"white",
  nomeJogo:"IFRJ Snake",
  desenhar(){
      canvasCtx.fillStyle =this.cor;
      canvasCtx.fillRect(0,0,this.largura,this.altura);
      canvasCtx.font = "21px Fantasy";
      canvasCtx.textAlign = "center";
      canvasCtx.textBaseline = "middle";
      canvasCtx.fillStyle = this.corTexto;
      canvasCtx.fillText(this.nomeJogo,400,30);
      canvasCtx.font = "22px Fantasy";
      canvasCtx.textAlign = "right";
      canvasCtx.fillText(this.qtdPontos + "  Pontuação", 700,45);
      canvasCtx.fillText(cobra.vida + "  Vidas", 700,15);
  }
}