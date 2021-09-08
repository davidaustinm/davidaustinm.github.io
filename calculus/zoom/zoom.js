var xleft = 0;
var xright = 2;
var ybottom = 0;
var ytop = 2;

var left = new Canvas("left", [xleft,ybottom,xright,ytop]);
var right = new Canvas("right", [xleft,ybottom,xright,ytop]);

var f = function(x) {
    return g(x) - g(1) + 1;
}
var g = function(x) {
    return 0.7*Math.sin(2.7*x) + 1.2*x + 0.25;
}

left.margins = [20,20, 20, 20]
left.setUpCoordinates();
right.margins = [20,20, 20, 20]
right.setUpCoordinates();

var lgrid = new Grid([xleft, 0.25, xright], [ybottom, 0.25, ytop]);
left.addPlotable(lgrid);

var rgrid = new Grid([xleft, 0.25, xright], [ybottom, 0.25, ytop]);
right.addPlotable(rgrid);

var laxes = new Axes();
laxes.ticks = [[xleft, 1, xright], [ybottom, 1, ytop]];
laxes.labels = [[xleft, 1, xright], [ybottom, 1, ytop]];
left.addPlotable(laxes);
var tlabel = new Label("x", [xright,0]);
tlabel.offset = [-7,10];
left.addPlotable(tlabel);
var flabel = new Label("f(x)", [0,ytop]);
flabel.align = "left";
flabel.offset = [7, -15];
left.addPlotable(flabel);

var raxes = new Axes();
raxes.ticks = [[xleft, 1, xright], [ybottom, 1, ytop]];
raxes.labels = [[xleft, 1, xright], [ybottom, 1, ytop]];
right.addPlotable(raxes);

var xlabel = new Label("x", [xright,0]);
xlabel.offset = [-7,10];
right.addPlotable(xlabel);
var Flabel = new Label("f(x)", [0,ytop]);
Flabel.align = "left";
Flabel.offset = [7, -15];
right.addPlotable(Flabel);

var a = 1;
var linear = function(x) {
    return f(a) + ff.derivative(a)*(x-a);
}

var ltangent = new Graph(new Function(linear));
var rtangent = new Graph(new Function(linear));
ltangent.strokeColor = "red";
rtangent.strokeColor = "red";
ltangent.lineWidth = 2;
rtangent.lineWidth = 2;
left.addPlotable(ltangent);
right.addPlotable(rtangent);

var ff = new Function(f);
var lgraph = new Graph(ff);
lgraph.lineWidth = 2;
lgraph.strokeColor = "blue";
left.addPlotable(lgraph);

var rgraph = new Graph(ff);
rgraph.lineWidth = 2;
rgraph.strokeColor = "blue";
right.addPlotable(rgraph);

var lrect = new Rectangle([a-dx, f(a) - dx], [2*dx, 2*dx]);
lrect.fillColor = null;
left.addPlotable(lrect);

var rrect = new Rectangle([a-dx, f(a) - dx], [2*dx, 2*dx]);
rrect.fillColor = null;
right.addPlotable(rrect);

var lpoint = new Point([a, f(a)]);
lpoint.fillColor = "cyan";
lpoint.size = 4;
left.addPlotable(lpoint);

var rpoint = new Point([a, f(a)]);
rpoint.fillColor = "cyan";
rpoint.size = 4;
right.addPlotable(rpoint);

var dx = 1;

var update = function() {
    right.bbox = [a - dx, f(a) - dx, a+dx, f(a) + dx]
    rtangent.domain = [a-dx, a+dx];
    rgraph.domain = [a-dx, a+dx];
    lrect.ll = [a-dx, f(a)-dx];
    lrect.dims = [2*dx, 2*dx];
    rrect.ll = [a-dx, f(a)-dx];
    rrect.dims = [2*dx, 2*dx];
    rgrid.rx = [a-dx, dx/4, a+dx];
    rgrid.ry = [f(a) - dx, dx/4, f(a) + dx];
    right.setUpCoordinates(right.bbox);
    right.resetPlotables();
    left.draw();
    right.draw();
}

update();

var zoom = document.getElementById("zoom");
var reset = document.getElementById("reset");
zoom.onclick = function() {
    if (dx <= 0.05) return;
    dx /= 2;
    update();
}

reset.onclick = function() {
    dx = 1;
    update();
}




