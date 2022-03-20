var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var dx = 4;

points = [[0, 0], [0,2],[2,0]]

var drawPoint = function(point) {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    var p = transform.actOnPoint(point[0], point[1]);
    ctx.fillRect(p[0]-dx, p[1]-dx, 2*dx, 2*dx);
    ctx.strokeRect(p[0]-dx, p[1]-dx, 2*dx, 2*dx);
    ctx.restore();
}

function AffineTransform() {
    this.matrix = [[1,0,0], [0,1,0], [0,0,1]];
    this.inverse = [[1,0,0], [0,1,0], [0,0,1]];
    this.multiply = function(m, n) {
	var newMatrix = [[0,0,0], [0,0,0], [0,0,0]];
	for (var i = 0; i < 3; i++) {
	    for (var j = 0; j < 3; j++) {
		for (var k = 0; k < 3; k++) {
		    newMatrix[i][j] += m[i][k] *
			n[k][j]
		}
	    }
	}
	return newMatrix;
    }
    this.translate = function(tx, ty) {
	var translate = [[1,0,tx], [0, 1, ty], [0,0,1]]
	var inverseTranslate = [[1, 0, -tx], [0,1,-ty], [0,0,1]]
	this.matrix = this.multiply(this.matrix,translate);
	this.inverse = this.multiply(inverseTranslate, this.inverse);
    }
    this.scale = function(sx, sy) {
	var scaling = [[sx, 0, 0], [0, sy, 0], [0,0,1]];
	var inverseScaling = [[1.0/sx, 0, 0], [0, 1.0/sy, 0], [0,0,1]];
	this.matrix = this.multiply(this.matrix, scaling);
	this.inverse = this.multiply(inverseScaling, this.inverse);
    }
    this.actOnPoint = function(x, y) {
	var newx = this.matrix[0][0] * x +
	    this.matrix[0][1] * y +
	    this.matrix[0][2];
	var newy = this.matrix[1][0] * x + 
	    this.matrix[1][1] * y +
	    this.matrix[1][2];
	return [newx,newy];
    }
    this.inverseOnPoint = function(x,y) {
	var newx = this.inverse[0][0]*x +
	    this.inverse[0][1] * y + this.inverse[0][2];
	var newy = this.inverse[1][0]*x +
	    this.inverse[1][1] * y + this.inverse[1][2];
	return [newx, newy];
    }
}

var move = function(x, y) {
    var point = transform.actOnPoint(x, y);
    ctx.moveTo(point[0], point[1]);
}
var line = function(x, y) {
    var point = transform.actOnPoint(x, y);
    ctx.lineTo(point[0], point[1]);
}
var quadCurve = function(x1, y1, x2, y2) {
    var p1 = transform.actOnPoint(x1, y1);
    var p2 = transform.actOnPoint(x2, y2);
    ctx.quadraticCurveTo(p1[0], p1[1], p2[0], p2[1]);
}

var halfSize = canvas.width/2.0
var transform = new AffineTransform();
transform.translate(halfSize, halfSize);
transform.scale(1, -1);
scale = halfSize/4;
transform.scale(scale, scale);

var draw = function() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    for (var i = -4; i <= 4; i++) {
	move(-4, i);
	line(4, i);
	move(i, -4);
	line(i, 4);
    }
    ctx.strokeStyle = "lightgray";
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.beginPath();
    move(-4, 0);
    line(4, 0);
    move(0, -4);
    line(0, 4);
    ctx.stroke();

    ctx.strokeStyle = "gray";
    ctx.beginPath();
    move(points[0][0], points[0][1]);
    line(points[1][0], points[1][1]);
    line(points[2][0], points[2][1]);
    ctx.stroke();

    ctx.strokeStyle = "blue"
    ctx.lineWidth = 2;
    ctx.beginPath();
    move(points[0][0], points[0][1]);
    quadCurve(points[1][0], points[1][1], points[2][0], points[2][1]);
    ctx.stroke();

    for (var i = 0; i < points.length; i++) {
	drawPoint(points[i]);
    }
}

draw();

var moving = -1;

canvas.onmousedown = function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    for (var i = 0; i < points.length; i++) {
	var p = points[i]
	p = transform.actOnPoint(p[0], p[1]);
	if (Math.abs(p[0] - x) <= dx && Math.abs(p[1] - y) <= dx) {
	    moving = i;
	    points[i] = transform.inverseOnPoint(x,y);
	    draw();
	    return;
	}
    }
}

canvas.onmousemove = function(event) {
    if (moving < 0) return;
    var x = event.offsetX;
    var y = event.offsetY;
    points[moving] = transform.inverseOnPoint(x,y);
    draw();
}
    

canvas.onmouseup = function(event) {
    if (moving < 0) return;
    var x = event.offsetX;
    var y = event.offsetY;
    points[moving] = transform.inverseOnPoint(x,y);
    moving = -1;
    draw();
}

