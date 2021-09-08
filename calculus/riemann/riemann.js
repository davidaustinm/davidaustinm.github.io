var xleft = 0;
var xright = 3;
var ybottom = 0;
var ytop = 3;

var canvas = new Canvas("riemann", [xleft,ybottom,xright,ytop]);
canvas.margins = [30,20, 20, 20]
canvas.setUpCoordinates();

var scanvas = new Canvas("slider", [0, -1, 1, 1]);
scanvas.margins = [0,0,0,0];
scanvas.setUpCoordinates();

var f = function(x) {
    //    return x*x
    return 3-(4-x)**2/8.0
}

this.lgrid = new Grid([xleft, 0.2, xright+0.001], [ybottom, 0.2, ytop+0.001]);

this.laxes = new Axes();
laxes.ticks = [[xleft, 0.5, xright], [ybottom, 0.5, ytop]];
laxes.labels = [[xleft, 0.5, xright], [ybottom, 0.5, ytop]];
this.tlabel = new Label("x", [xright,0]);
tlabel.offset = [-7,10];
this.flabel = new Label("f(x)", [0,ytop]);
flabel.align = "left";
flabel.offset = [7, -15];

this.plotables = [this.lgrid, this.laxes, this.tlabel, this.flabel]

var green = 'rgb(200,255,200)';
var rectangles = []
var addRectangles = function(N) {
    canvas.removeAllPlotables();
    canvas.addPlotable(this.plotables);
    rectangles = []
    dx = (xright-xleft)/N;
    x = xleft;
    for (var i = 0; i < N; i++) {
	var rect = new Rectangle([x, 0], [dx, f(x)])
	rect.fillColor = green;
	rect.strokeColor = "black";
	canvas.addPlotable(rect);
	rectangles.push(rect)
	x += dx
    }
    canvas.addPlotable(this.graph);
}

this.graph = new Graph(new Function(f));
graph.strokeColor = "blue";
graph.lineWidth = 2;

this.move = function() {
    N = Math.round(slider.coordinate());
    addRectangles(N);
    update();
}

var N = 5;
slider = new Slider([0.04,0.96], 0, [1, 50], this.move);
slider.point.style = "box"
slider.point.size=4;
slider.point.fillColor="red";
slider.init(N);
slider.ticks= [5,5,50]
slider.labels = [5,5,50]
scanvas.addPlotable(slider);
scanvas.addMoveable(slider);

var nlabel = new Label("N", [0,0]);
nlabel.align = "left";
nlabel.offset = [3,7];
scanvas.addPlotable(nlabel);

addRectangles(N);

var update = function() {
    canvas.draw();
    scanvas.draw();
}

update();






