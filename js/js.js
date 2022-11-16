// variaveis da bolinha.
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

// velocidade da bolinha.
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


// comprimento da bolinha.
let raio = diametro / 2;

// variáveis da raquete.
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 100;

// variáveis da raquete do Adversário.
let xRaqueteAd = 585;
let yRaqueteAd = 150;
let velocidadeYOponente;

let meusPontos = 0;
let pontosDoOponente = 0;

let colidiu = false;

function preload(){
  trilha = loadSound("")
}

function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background(0);
  mostraBolinha();
  velocidadeDaBolinha()
  verificaColisaoBorda()
  mostraRaquete(xRaquete, yRaquete)
  movimentaRaquete()
  // verificaColisaoRaquete()
  mostraRaquete(xRaqueteAd, yRaqueteAd)
  movimentaRaqueteOponente()
  verificaColisaoRaquete(xRaquete, yRaquete)
  verificaColisaoRaquete(xRaqueteAd, yRaqueteAd)
  incluirPontos()
  marcaPontos()

}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function velocidadeDaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if(xBolinha + raio> width || xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}


function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 7;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 7;
  }
}

// function verificaColisaoRaquete(){
//   if(xBolinha - raio < xRaquete + comprimentoRaquete 
//     && yBolinha - raio < yRaquete + alturaRaquete
//     && yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
// }

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *=-1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteAd - comprimentoRaquete / 2 - 30;
  yRaqueteAd += velocidadeYOponente
}

function incluirPontos(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10,40,20);
  fill (255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPontos(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosDoOponente += 1;
  }
}
