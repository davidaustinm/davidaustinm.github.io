var xleft = 0;
var xright = 15;
var ybottom = 0;
var ytop = 0.15;
var canvasName = 'pdf'
var sliderName = 'slider'

lgrid = new Grid([xleft, 1, xright+0.001], [ybottom, 0.025, ytop+0.001]);

laxes = new Axes();
laxes.ticks = [[xleft, 1, xright], [ybottom, 0.05, ytop+0.000001]];
laxes.labels = [[xleft, 2, xright], [ybottom, 0.05, ytop-0.000001]];

var canvas = new Canvas(canvasName, [xleft,ybottom,xright,ytop]);
canvas.margins = [50,20, 20, 20]
canvas.setUpCoordinates();

var scanvas = new Canvas(sliderName, [0, -1, 1, 1]);
scanvas.margins = [0,0,0,0];
scanvas.setUpCoordinates();

topLabel = new Label("0.15", [0,0.15]);
topLabel.align = "right";
topLabel.offset = [-6,-5];
topLabel.font = "14px Arial";
plotables = [lgrid, laxes, topLabel];

var green = 'rgb(150,150,255)';
var rectangles = []
var addRectangles = function(N) {
    canvas.removeAllPlotables();
    canvas.addPlotable(plotables);
    
    total = data[0][0];
    counts = data[N-1]
    rectangles = []
    dx = (xright-xleft)/N;
    x = xleft;
    for (var i = 0; i < N; i++) {
	height = counts[i];
	height /= (total*dx);
	var rect = new Rectangle([x, 0], [dx, height])
	rect.fillColor = green;
	rect.strokeColor = "black";
	canvas.addPlotable(rect);
	rectangles.push(rect)
	x += dx
    }
}

move = function() {
    N = Math.round(slider.coordinate());
    addRectangles(N);
    update();
}

var N = 5;
slider = new Slider([0.04,0.96], 0, [1, 50], move);
slider.point.style = "box"
slider.point.size=4;
slider.point.fillColor="red";
slider.init(N);
slider.ticks= [5,5,50]
slider.labels = [5,5,50]
scanvas.addPlotable(slider);
scanvas.addMoveable(slider);

var nlabel = new Label("bins", [0,0]);
nlabel.align = "left";
nlabel.offset = [3,7];
scanvas.addPlotable(nlabel);

addRectangles(N);

update = function() {
    canvas.draw();
    scanvas.draw();
}

update();

// ======================================================

xleft = 0;
xright = 15;
ybottom = 0;
ytop = 2000;

lgrid = new Grid([xleft, 1, xright+0.001], [ybottom, 200, ytop+0.001]);

laxes = new Axes();
laxes.ticks = [[xleft, 1, xright], [ybottom, 200, ytop]];
laxes.labels = [[xleft, 2, xright], [ybottom, 200, ytop]];

var ccanvas = new Canvas('pdf-counts', [xleft,ybottom,xright,ytop]);
ccanvas.margins = [50,20, 20, 20]
ccanvas.setUpCoordinates();

var cscanvas = new Canvas('slider-counts', [0, -1, 1, 1]);
cscanvas.margins = [0,0,0,0];
cscanvas.setUpCoordinates();
cplotables = [lgrid, laxes]

var crectangles = []
var caddRectangles = function(N) {
    ccanvas.removeAllPlotables();
    ccanvas.addPlotable(cplotables);
    
    total = data[0][0];
    counts = data[N]
    rectangles = []
    dx = (xright-xleft)/N;
    x = xleft;
    for (var i = 0; i < N; i++) {
	height = counts[i];
	var rect = new Rectangle([x, 0], [dx, height])
	rect.fillColor = green;
	rect.strokeColor = "black";
	ccanvas.addPlotable(rect);
	rectangles.push(rect)
	x += dx
    }
}

cmove = function() {
    N = Math.round(cslider.coordinate());
    caddRectangles(N);
    cupdate();
}

var N = 5;
cslider = new Slider([0.04,0.96], 0, [1, 50], cmove);
cslider.point.style = "box"
cslider.point.size=4;
cslider.point.fillColor="red";
cslider.init(N);
cslider.ticks= [5,5,50]
cslider.labels = [5,5,50]
cscanvas.addPlotable(cslider);
cscanvas.addMoveable(cslider);

var cnlabel = new Label("bins", [0,0]);
cnlabel.align = "left";
cnlabel.offset = [3,7];
cscanvas.addPlotable(cnlabel);

caddRectangles(N);

cupdate = function() {
    ccanvas.draw();
    cscanvas.draw();
}

cupdate();














