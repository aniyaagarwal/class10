var box1, box2, box3, box4;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Sprite(0,0,"black");
  box2 = new Sprite(50,0,"white");
  box3 = new Sprite(100,0,"black");
  box4 = new Sprite(150,0,"white");
  box5 = new Sprite(200,0,"black");
  box6 = new Sprite(250,0,"white");
  box7 = new Sprite(300,0,"black");
  box8 = new Sprite(350,0,"white");
}

function draw() 
{
  background(51);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display(); 
}