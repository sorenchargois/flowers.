var r, g, b;

function setup(){
    cnv = createCanvas(1200, 600);
    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw(){
    background(255, 33, 120);
    angleMode(DEGREES);
    noStroke();

    push();
    stroke(255);
    strokeWeight(4);
    line(200, 400, 200, 600);
    pop();
 
    // dark purple petal
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(7);
    ellipse(152, 110, 70, 120);
    pop();
    // orange petal
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(-10);
    ellipse(60, 130, 70, 120);
    pop();
    // another
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(-45);
    ellipse(-80, 120, 70, 120);
    pop();
    // royal blue petal 
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(-30);
    ellipse(22, 290, 70, 120);
    pop();
    // neon green
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(30);
    ellipse(220, 60, 70, 120);
    pop();
    // bright green petal
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(30);
    ellipse(160, 190, 70, 120);
    pop();
    // anotha one
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(28);
    ellipse(210, 190, 70, 120);
    pop();
    // finally
    push();
    fill(r, g, b);
    translate(100, 100);
    rotate(-36);
    ellipse(-65, 285, 70, 120);
    pop();
    // grey petal  
    fill(r, g, b);
    ellipse(270, 300, 120, 70);
    // neon purp petal
    fill(r, g, b);
    ellipse(120, 300, 120, 70);

    // white inner
    fill(255, 34, 540);
    ellipse(200, 300, 140, 140);
}

function mousePressed(){
    var d = dist(mouseX, mouseY, 200, 300);
    if (d < 100) {
      r = random(255);
      g = random(255);
      b = random(255);
    }
}