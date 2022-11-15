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
let xRaquete = 15;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 100;

// variáveis da raquete do Adversário.
let xRaqueteAd = 585;
let yRaqueteAd = 150;


function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background(0);
  mostraBolinha();
  velocidadeDaBolinha()
  verificaColisaoBorda()
  mostraRaquete()
  mostraRaqueteAdversario()
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
function mostraRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}
function mostraRaqueteAdversario(){
  rect(xRaqueteAd, yRaqueteAd, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}