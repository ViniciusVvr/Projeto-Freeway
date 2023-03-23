///VARIAVEIS CARROS///

//POSIÇÃO DOS CARROS
  
    var xCarros = [600,600,600, 600, 600 , 600]
    let yCarros = [40,96,150, 210, 270, 318 ];
    let velocidadeCarros= [4, 3.4, 4.5, 5, 3.5, 6]

///DIMENSÕES DOS CARROS///
    let larguraCarro = 50;
    let alturaCarro = 40;
  
 
///MOSTRAR OS CARROS///


      function mostrarCarros(){
    for (let i = 0; i < imagemCarros.length; i++){
  
 image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);

    }}


///MOVIMENTA CARROS///
 
      function movimentaCarros(){
      for (let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
      }}

///CARROS INFINITOS///

      function carrosInfinitos(){
        for (let i = 0; i < imagemCarros.length; i++){
        if(passouLimiteDeTela(xCarros[i])){
        xCarros[i] = 600;}
        }}

      function passouLimiteDeTela(xCarros){
       return xCarros<-50; 
      }
          
