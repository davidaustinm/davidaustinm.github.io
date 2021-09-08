var xleft = -2;
var xright = 2;
var ybottom = -2;
var ytop = 2;

var left = new Canvas("left", [xleft,ybottom,xright,ytop]);
var right = new Canvas("right", [xleft,ybottom,xright,ytop]);

var f = function(x) {
    return x*x*x - x;
}
var fp = function(x) {
    return 3*x*x - 1;
}

left.margins = [20,5,25,10];
left.setUpCoordinates();
right.margins = [35,20,5,10];
right.setUpCoordinates();

var lgrid = new Grid([xleft, 0.5, xright], [ybottom, 0.5, ytop]);
left.addPlotable(lgrid);

var rgrid = new Grid([xleft, 0.5, xright], [ybottom, 0.5, ytop]);
right.addPlotable(rgrid);

var laxes = new Axes();
laxes.ticks = [[xleft, 1, xright], [ybottom, 1, ytop]];
laxes.labels = [[xleft, 1, xright], [ybottom, 1, ytop]];
left.addPlotable(laxes);
var tlabel = new Label("x", [xright,0]);
tlabel.offset = [-5,10];
left.addPlotable(tlabel);
var flabel = new Label("f(x)", [0,ytop]);
flabel.align = "left";
flabel.offset = [7, -10];
left.addPlotable(flabel);

var raxes = new Axes();
raxes.ticks = [[xleft, 1, xright], [ybottom, 1, ytop]];
raxes.labels = [[xleft, 1, xright], [ybottom, 1, ytop]];
right.addPlotable(raxes);

var xlabel = new Label("x", [6.25,0]);
xlabel.offset = [-5,10];
right.addPlotable(xlabel);
var Flabel = new Label("f'(x)", [0,3.9]);
Flabel.align = "left";
Flabel.offset = [7, 10];
right.addPlotable(Flabel);

var ffunction = new Function(f);
var fgraph = new Graph(ffunction);
fgraph.lineWidth = 2;
fgraph.strokeColor = "blue";
left.addPlotable(fgraph);

var Fgraph = new Graph(new Function(fp));
Fgraph.lineWidth = 2;
Fgraph.strokeColor = "blue";
right.addPlotable(Fgraph);

var tangent = new Line([0,0], [1,0]);
tangent.strokeColor = "red";
tangent.lineWidth = 2;
left.addPlotable(tangent);

var point = new Point([0, f(0)]);
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

var Fpoint = new Point([0,0]);
Fpoint.fillColor = "cyan";
Fpoint.size = 4;
right.addPlotable(Fpoint);

var update = function() {
    var x = point.point[0];
    var y = point.point[1];
    var slope = fp(x);
    var l = Math.sqrt(1 + slope*slope) // length([1,slope]);
    tangent.p0 = vadd([x,y], smult(-0.7/l, [1,slope]));
    tangent.p1 = vadd([x,y], smult(0.7/l, [1,slope]));
    Fpoint.point = [x, fp(x)];
    left.draw();
    right.draw();
}

update();


