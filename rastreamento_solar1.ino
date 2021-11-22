#include <Servo.h>

#define pinServoVert 9
#define pinServoHori 8
#define pinLdrSupEsq A0
#define pinLdrSupDir A1
#define pinLdrInfEsq A2
#define pinLdrInfDir A3

////////////////////////

#define semLuz false
#define comLuz true

#define posServoHoriNoite 90
#define posServoVertNoite 90

#define valorNoite 100

Servo servoHoriz;
Servo servoVert;

bool temLuz = semLuz;
int anguloVert = posServoVertNoite;
int anguloHori = posServoHoriNoite;


void setup()
{
  pinMode(pinLdrSupEsq, INPUT);
  pinMode(pinLdrSupDir, INPUT);
  pinMode(pinLdrInfEsq, INPUT);
  pinMode(pinLdrInfDir, INPUT);
  
  servoVert.attach(pinServoVert);
  servoHoriz.attach(pinServoHori);
  Serial.begin(9600);
}

void loop()
{
  temLuz = !estaNoite();
  
  if(temLuz == comLuz){
    servoVert.write(constrain(anguloVert, 0, 180));
    servoHoriz.write(constrain(anguloHori, 0, 180));
    
    anguloHori += comparaHori();
    anguloVert += comparaVert();
  }
  else if(temLuz == semLuz){
    servoVert.write(posServoVertNoite);
    servoHoriz.write(posServoHoriNoite);
  }
  
  Serial.println(analogRead(pinLdrSupEsq));
}


int comparaHori(){
  
  int valorEsq= analogRead(pinLdrSupEsq) + analogRead(pinLdrInfEsq);
  int valorDir = analogRead(pinLdrSupDir) + analogRead(pinLdrInfDir);
  
  if(valorEsq > valorDir){
    return 1;
  }
  else if(valorEsq < valorDir){
    return -1;
  }
  else{
    return 0;
  }
}

int comparaVert(){
  
  int valorSup = analogRead(pinLdrSupDir) + analogRead(pinLdrSupEsq);
  int valorInf = analogRead(pinLdrInfDir) + analogRead(pinLdrInfEsq);
  
  if(valorSup > valorInf){
    return 1;
  }
  else if(valorSup < valorInf){
    return -1;
  }
  else{
    return 0;
  }
}


bool estaNoite(){
  return(analogRead(pinLdrSupEsq) < valorNoite && 
        (analogRead(pinLdrSupDir) < valorNoite) && 
        (analogRead(pinLdrInfEsq) < valorNoite) && 
        (analogRead(pinLdrInfDir) < valorNoite));
}