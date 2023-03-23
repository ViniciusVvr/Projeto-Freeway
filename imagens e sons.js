//VARIAVEIS DAS IMAGENS E SONS DO JOGO

let fundoEstrada;
let carro1;
let carro2;
let carro3;
let meuPersonagem;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
   
   fundoEstrada = loadImage("IMAGENS/FundoMario.png");
      carro1 = loadImage("IMAGENS/Fantasma.png");
        carro2 = loadImage("IMAGENS/Inimarrom.png");
          carro3 = loadImage("IMAGENS/Bowser.png");
             meuPersonagem = loadImage("IMAGENS/Mario.png");
                imagemCarros = [carro1, carro2, carro3,
                                carro1, carro2, carro3];
  
    somTrilha = loadSound("SONS/MusicaMario.mp3");
    somColisao = loadSound("SONS/derrotaMario.mp3");
    somPonto = loadSound("SONS/pontoMario.mp3")
}