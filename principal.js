///////////////////////////////////
///DIMENSÕES DA TELA DO JOGO//////
function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}


//PRINCIPAL///
function draw() {
  background(fundoEstrada);
  mostrarCarros();
  mostraPersonagem();
  movimentaCarros();
  movimentaPersonagem();
  carrosInfinitos();
  passouLimiteDeTela();
  verificarColisao();
  mostrarPontos();
  atribuirPontos();
  limiteX();
}

