var w0 = 5;
var w3 = 0;
var w7 = 0;

var update0 = function() {
    w0 = w0slider.coordinate();
    for (var i = 0; i < 8; i++) {
	points0[i].point = [i,f0(i)];
	lines0[i].p1 = [i, f0(i)];
    }
    fourier0.draw();
}

var update3 = function() {
    w3 = w3slider.coordinate();
    for (var i = 0; i < 8; i++) {
	points3[i].point = [i,f3(i)];
	lines3[i].p1 = [i, f3(i)];
    }
    fourier3.draw();
}

var update7 = function() {
    w7 = w7slider.coordinate();
    for (var i = 0; i < 8; i++) {
	points7[i].point = [i,f7(i)];
	lines7[i].p1 = [i, f7(i)];
    }
    fourier7.draw();
}

var fourier0 = new Canvas("fourier0", [0,-3,7,10]);
var fourier3 = new Canvas("fourier3", [0,-3,7,10]);
var fourier7 = new Canvas("fourier7", [0,-3,7,10]);

fourier0.margins = [10,10,10,10]
fourier0.setUpCoordinates();

fourier3.margins = [10,10,10,10]
fourier3.setUpCoordinates();

fourier7.margins = [10,10,10,10]
fourier7.setUpCoordinates();

dy = 0
y0 = -3
y3 = y0 - dy
y7 = y3 - dy
var w0l = new Label("F", [2,y0]);
var w3l = new Label("F", [2, y3]);
var w7l = new Label("F", [2, y7]);
w0l.offset = [-23,-3];
w3l.offset = [-23,-3];
w7l.offset = [-23,-3];
var w00 = new Label("0", [2,y0]);
var w30 = new Label("3", [2,y3]);
var w70 = new Label("7", [2,y7]);
w00.offset = [-14,-8];
w30.offset = [-14,-8];
w70.offset = [-14,-8];
fourier0.addPlotable([w0l, w00])
fourier3.addPlotable([w3l, w30])
fourier7.addPlotable([w7l, w70])

var w0slider = new Slider([2,6], y0, [5,8], update0);
w0slider.point.style = "box";
w0slider.point.fillColor = "blue";
w0slider.point.size = 4;
w0slider.init(w0);
fourier0.addPlotable(w0slider);
fourier0.addMoveable(w0slider);

var w3slider = new Slider([2,6], y3, [-1.5,1.5], update3);
w3slider.point.style = "box";
w3slider.point.fillColor = "blue";
w3slider.point.size = 4
w3slider.init(w3);
fourier3.addPlotable(w3slider);
fourier3.addMoveable(w3slider);

var w7slider = new Slider([2,6], y7, [-1.5,1.5], update7);
w7slider.point.style = "box";
w7slider.point.fillColor = "blue";
w7slider.point.size = 4
w7slider.init(w7);
fourier7.addPlotable(w7slider);
fourier7.addMoveable(w7slider);

var f0 = function(x) {
    return w0 + 0*Math.cos(3*Math.PI*(2*x+1)/16.0)
	+ 0*Math.cos(7*Math.PI*(2*x+1)/16.0);
}

var f3 = function(x) {
    return 5 + w3*Math.cos(3*Math.PI*(2*x+1)/16.0)
	+ 0*Math.cos(7*Math.PI*(2*x+1)/16.0);
}

var f7 = function(x) {
    return 5 + 0*Math.cos(3*Math.PI*(2*x+1)/16.0)
	+ w7*Math.cos(7*Math.PI*(2*x+1)/16.0);
}

var graph0 = new Graph(new Function(f0));
graph0.lineWidth = 2;
graph0.strokeColor = "gray"
fourier0.addPlotable(graph0);

var graph3 = new Graph(new Function(f3));
graph3.lineWidth = 2;
graph3.strokeColor = "gray"
fourier3.addPlotable(graph3);

var graph7 = new Graph(new Function(f7));
graph7.lineWidth = 2;
graph7.strokeColor = "gray"
fourier7.addPlotable(graph7);

var points0 = [];
var lines0 = [];
for (var i = 0; i < 8; i++) {
    var p = new Point([i, f0(i)]);
    p.fillColor = "blue"
    points0.push(p);

    var l = new Line([i,0], [i,f0(i)]);
    l.strokeColor = "lightgray";
    lines0.push(l);
}
fourier0.addPlotable(lines0);
fourier0.addPlotable(points0);
axes0 = new Axes()
fourier0.addPlotable(axes0);
axes0.ticks = [[0,1,7], null]
axes0.labels = [[0,1,7], null]

var points3 = [];
var lines3 = [];
for (var i = 0; i < 8; i++) {
    var p = new Point([i, f3(i)]);
    p.fillColor = "blue"
    points3.push(p);

    var l = new Line([i,0], [i,f3(i)]);
    l.strokeColor = "lightgray";
    lines3.push(l);
}
fourier3.addPlotable(lines3);
fourier3.addPlotable(points3);
axes3 = new Axes()
fourier3.addPlotable(axes3);
axes3.ticks = [[0,1,7], null]
axes3.labels = [[0,1,7], null]

var points7 = [];
var lines7 = [];
for (var i = 0; i < 8; i++) {
    var p = new Point([i, f7(i)]);
    p.fillColor = "blue"
    points7.push(p);

    var l = new Line([i,0], [i,f7(i)]);
    l.strokeColor = "lightgray";
    lines7.push(l);
}
fourier7.addPlotable(lines7);
fourier7.addPlotable(points7);
axes7 = new Axes()
fourier7.addPlotable(axes7);
axes7.ticks = [[0,1,7], null]
axes7.labels = [[0,1,7], null]



update0();
update3();
update7();


