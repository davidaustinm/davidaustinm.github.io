var xleft = 0;
var xright = 1;
var ybottom = 0;
var ytop = 1;

var left = new Canvas("left", [xleft,ybottom,xright,ytop]);

var f = function(x) {
    return x*x;
}

left.margins = [35, 30, 20, 10];
left.setUpCoordinates();

var lgrid = new Grid([xleft, 0.25, xright], [ybottom, 0.25, ytop]);
left.addPlotable(lgrid);

var laxes = new Axes();
laxes.ticks = [[xleft, 0.25, xright], [ybottom, 0.25, ytop]];
laxes.labels = [[xleft, 0.25, xright], [ybottom, 0.25, ytop]];
left.addPlotable(laxes);
var tlabel = new Label("x", [xright,0]);
tlabel.offset = [-5,10];
left.addPlotable(tlabel);
var flabel = new Label("f(x)", [0,ytop]);
flabel.align = "left";
flabel.offset = [7, -10];
left.addPlotable(flabel);

var ffunction = new Function(f);

var area = new AreaBetweenCurves(f);
area.fillColor = "lightblue";
left.addPlotable(area);

var avg = 0;
var afunc = function() {return avg;}
var rect = new AreaBetweenCurves(afunc);
rect.fillColor = "lightgreen";
left.addPlotable(rect);

var fgraph = new Graph(ffunction);
fgraph.lineWidth = 2;
fgraph.strokeColor = "blue";
left.addPlotable(fgraph);

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

var update = function() {
    var x = point.point[0];
    avg = x*x/3;
    area.domain = [0,x];
    rect.domain = [0,x];
    left.draw();
}

update();


