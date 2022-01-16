var canvas = new Canvas("seeds", [-200,-200,200,200]);
canvas.margins = [1,1,1,1];
canvas.backgroundColor = "rgb(153,153,255)";
canvas.setUpCoordinates();

var animationRunning = false;
var animate = document.getElementById("animate");
animate.onclick = function() {
    if (animationRunning) {
	animationRunning = false;
	stopAnimation();
    } else {
	animationRunning = true;
	startAnimation(increment, 20);
    }
}

var increment = function() {
    angle += 0.00001;
    anglestring = angle.toString();
    index = anglestring.indexOf(".");
    if (index + 6 < anglestring.length) {
	anglestring = anglestring.substring(0,index+6);
    }
    anglefield.value = anglestring;
    buildseeds();
}

var residue = 0;
var residuefield = document.getElementById("residue");
residuefield.onchange = function() {
    tryresidue = parseInt(residuefield.value);
    if (isNaN(tryresidue) || tryresidue < 0) {
	residue = 0;
	residue.value = "";
	setcolors();
	update();
	return;
    }
    residue = tryresidue;
    if (residue >= 200) residue = 200;
    setcolors();
    update();
}

var numberfield = document.getElementById("number");
numberfield.onchange = function() {
    trynumber = parseInt(numberfield.value);
    if (isNaN(trynumber)) {
	numberfield.value = number;
	return;
    }
    if (trynumber < 10) {
	numberfield.value = number;
	return;
    }
    number = trynumber;
    buildseeds();
}

var anglefield = document.getElementById("angle");
anglefield.onchange = function() {
    string = anglefield.value;
    var index = string.indexOf("/");
    if (index == -1) {
	if (string == "root2") {
	    tryangle = Math.sqrt(2);
	}
	else if (string == "e") {
	    tryangle = Math.E;
	}
	else if (string == "pi") {
	    tryangle = Math.PI;
	}
	else if (string === "phi") {
	    tryangle = (Math.sqrt(5)-1)/2;
	} else {
	    tryangle = parseFloat(string);
	    if (isNaN(tryangle)) {
		anglefield.value = angle
		return;
	    }
	}
	angle = tryangle;
    } else {
	var num = parseFloat(string.substring(0, index));
	var den = parseFloat(string.substring(index+1));
	angle = num/den;
    }
    buildseeds();
}

var seed = 1;
function random(max) {
    var x = Math.sin(seed++) * 10000;
    return Math.floor(max*(x - Math.floor(x)));
}

rescolors = [];
labelcolors = []
gray = "rgb(204,204,204)"
for (var n=0; n < 100; n++) {
    r = random(255);
    g = random(255);
    b = random(255);
    c = "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
    rescolors.push(c);
    if (r+g+b > 332) labelcolors.push("black");
    else labelcolors.push(gray);
}

var color = 0;
colors = ["white", "rgb(204, 178, 0)"]
var colorbutton = document.getElementById("color");
colorbutton.onclick = function() {
    color = 1-color;
    residue = 0;
    residuefield.value = "";
    setcolors()
    update()
}

var setcolors = function() {
    if (residue == 0) {
	f0 = 1
	fib = [f0]
	f1 = 2
	while (f1 <= number) {
	    fib.push(f1)
	    f2 = f0 + f1
	    f0 = f1
	    f1 = f2
	}

	for (var i = 0; i < number; i++) {
	    seeds[i].fillColor = "white";
	    labels[i].color="black";
	}

	for (var i = 0; i < fib.length; i++) {
	    seeds[fib[i]-1].fillColor = colors[color];
	}
    } else {
	for (var i = 0; i < number; i++) {
	    seeds[i].fillColor = rescolors[i%residue];
	    labels[i].color = labelcolors[i%residue];
	}
    }
}

var number = 10;
var angle = 0;
numberfield.value = number;
anglefield.value = angle;

var mkseed = function(k, angle) {
    r = Math.sqrt(k);
    fracangle = 2*Math.PI*angle;
    var seed = new Point([r*Math.cos(k*fracangle), r*Math.sin(k*fracangle)]);
    seed.size=12;
    seed.fillColor="white";
    seed.lineWidth=2;
    return seed;
}

seeds = []

var buildseeds = function() {
    var k;
    canvas.removeAllPlotables();
    dim = Math.sqrt(number);
    canvas.bbox = [-dim, -dim, dim, dim];
    canvas.setUpCoordinates();
    bounding = new Rectangle([-dim, -dim], [2*dim, 2*dim]);
    bounding.filled = false;
    bounding.lineWidth=2;
    canvas.addPlotable(bounding);
    seeds = [];
    labels = [];
    for (k = 1; k <= number; k++) {
	seed = mkseed(k, angle);
	seeds.push(seed);
	label = new Label(k, seed.point);
	labels.push(label);
	label.font = "12px Arial Black";
	label.offset = [0,-5];
	canvas.addPlotable(seed);
	canvas.addPlotable(label);
    }
    setcolors();
    
    update();
}

var update = function() {
    canvas.draw();
}

buildseeds();
