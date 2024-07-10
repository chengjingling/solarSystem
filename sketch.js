/*
Extra features implemented:
- Added an asteroid that is rotating around the moon
*/

var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;
    
    // SUN
    translate(width/2, height/2);
    rotate(radians(speed / 3)); // MAKES THE SUN SPIN
    celestialObj(color(255,150,0), 200); // SUN
        
    // EARTH
    rotate(radians(speed)) // MAKES THE EARTH ORBIT THE SUN FASTER THAN THE SUN SPINS
    translate(300, 0);
    celestialObj(color(0,0,255), 80); // EARTH
    
    // MOON
    rotate(radians(-speed * 2)); // MAKES THE MOON ORBIT THE EARTH IN THE OPPOSITE DIRECTION
    translate(100, 0);
    celestialObj(color(255,255,255), 30); // MOON
    
    // ASTEROID
    rotate(radians(speed * 2)); // MAKES THE ASTEROID ORBIT THE MOON
    translate(40, 0);
    rotate(radians(speed)); // MAKES THE ASTEROID SPIN
    celestialObj(color(0,255,0), 20); // ASTEROID  
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}