var xleft = -0.5;
var xright = 2;
var ybottom = -0.5;
var ytop = 2;

var left = new Canvas("left", [xleft,ybottom,xright,ytop]);

var f = function(x) {
    return 0.5*Math.sin(2.7*x) + 0.8*x + 0.25;
}

left.margins = [10,10,10,10];
left.setUpCoordinates();

var lgrid = new Grid([xleft, 0.5, xright], [ybottom, 0.5, ytop]);
left.addPlotable(lgrid);

var laxes = new Axes();
laxes.ticks = [[xleft, 0.5, xright], [ybottom, 0.5, ytop]];
laxes.labels = [[xleft, 0.5, xright], [ybottom, 0.5, ytop]];
left.addPlotable(laxes);
var tlabel = new Label("x", [xright,0]);
tlabel.offset = [-5,10];
left.addPlotable(tlabel);
var flabel = new Label("f(x)", [0,ytop]);
flabel.align = "left";
flabel.offset = [7, -10];
left.addPlotable(flabel);

var a = 1;

var ffunction = new Function(f);
var fgraph = new Graph(ffunction);
fgraph.lineWidth = 2;
fgraph.strokeColor = "blue";
left.addPlotable(fgraph);

var linear = function(x) {
    return f(a) + ffunction.derivative(a)*(x-a);
}

var secant = new Line([0,f(0)], [a,f(a)]);
secant.lineWidth = 2;
secant.strokeColor = "magenta";
secant.infinite = true;
left.addPlotable(secant);

var tangent = new Graph(new Function(linear));
tangent.strokeColor = "red";
tangent.lineWidth = 2;
left.addPlotable(tangent);

var fixed = new Point([a, f(a)]);
fixed.style = "circle";
fixed.fillColor = "cyan";
fixed.size = 4;
left.addPlotable(fixed);

var point = new Point([0.25, f(0.25)]);
point.style = "circle";
point.fillColor = "red";
point.size = 4;
point.move = function(p) {
    var x = p[0];
    if (x < xleft || x > xright) return;
    point.point = [x, f(x)];
    update();
}
left.addPlotable(point);
left.addMoveable(point);

var update = function() {
    var x = point.point[0];
    if (Math.abs(x-a) < 0.001) return;
    secant.p0 = point.point;
    left.draw();
}

update();

