///VARIAVEIS DO MEU PERSONAGEM ///

    let xMeuPersonagem = 100;
    let yMeuPersonagem = 374;
    let larguraMeuPersonagem = 30;
    let alturaMeuPersonagem = 30;
    let velocidadePersonagem = 4; // VELOCIDADE DO MEU PERSONAGEM
    let colisao = false;
    let raioMeuPersonagem = larguraMeuPersonagem / 2;
    let meusPontos = 0;

///MOSTRAR O MEU PERSONAGEM///

      function mostraPersonagem(){
        image(meuPersonagem,xMeuPersonagem,
                yMeuPersonagem,larguraMeuPersonagem, alturaMeuPersonagem);
      }
        
        ///MOVIMENTA MEU PERSONAGEM///
      
      function movimentaPersonagem(){
            if(keyIsDown(UP_ARROW)){
            yMeuPersonagem -= velocidadePersonagem;
            }if(keyIsDown(DOWN_ARROW)){
              if(podeSeMoverBaixo()){
               yMeuPersonagem += velocidadePersonagem;
            }}if(keyIsDown(LEFT_ARROW)){
                   xMeuPersonagem -= velocidadePersonagem;
            }if(keyIsDown(RIGHT_ARROW)){
                       xMeuPersonagem += velocidadePersonagem;}
      }

///LIMITE DE TELA

      function bloqueiaPersonagem(){
        if(xMeuPersonagem + LarguraMeuPersonagem > 600){
          xMeuPersonagem = 580     
        }}

///VERIFICAR COLISÕES///

      function verificarColisao(){
        for (let i = 0; i < imagemCarros.length; i++){
    colisao = 
    collideRectCircle(xCarros[i], yCarros[i],
    larguraCarro, alturaCarro, 
    xMeuPersonagem,
    yMeuPersonagem, 15)
    if (colisao){
       voltaInicio();
        somColisao.play();
    if (colisao){
      meusPontos -= 1;
    if (meusPontos < 0){
      meusPontos = 0
      
             }
            }
           }
          } 
        }
      

      function voltaInicio(){
        yMeuPersonagem = 374;
        xMeuPersonagem = 100;
      }

//MostrarPontos

      function mostrarPontos(){
        textAlign(CENTER)
;        textSize(20);
        fill(255, 215, 0);
        text(meusPontos, 19, 25)
      }

//ATRIBUIR PONTOS

      function atribuirPontos(){
        if(yMeuPersonagem < 15){
        meusPontos++;
        voltaInicio();
        somPonto.play();
      }}

//VERIFICAR SE PODE SE MOVER

      function podeSeMoverBaixo(){
        return yMeuPersonagem < 374
      }

      function limiteX(){
        if(xMeuPersonagem + larguraMeuPersonagem <= 30){
          xMeuPersonagem = 0;
        }if(xMeuPersonagem + larguraMeuPersonagem >= 600){
          xMeuPersonagem = 570;
      }}

 



          