var xright = 6.5
var left = new Canvas("left", [0,-1,xright,2]);
var right = new Canvas("right", [0,0,xright,4]);

var f = function(x) {
    return Math.cos(x) + 0.5;
}
var F = function(x) {
    return Math.sin(x) + 0.5*x;
}
var xbreak1 = Math.acos(-0.5);
var xbreak2 = 2*Math.PI - xbreak1;

left.margins = [20,5,25,10];
left.setUpCoordinates();
right.margins = [35,20,5,10];
right.setUpCoordinates();

var area1 = new AreaBetweenCurves(f);
area1.domain = [0,0];
area1.fillColor = "lightblue";
left.addPlotable(area1);
var area2 = new AreaBetweenCurves(f);
area2.domain = [xbreak1, xbreak1];
area2.fillColor = "lightpink";
left.addPlotable(area2);
var area3 = new AreaBetweenCurves(f);
area3.domain = [xbreak2, xbreak2];
area3.fillColor = "lightblue";
left.addPlotable(area3);

var laxes = new Axes();
laxes.ticks = [[0, 1, 6], [-1, 0.5, 2]]
laxes.labels = [[0, 1, 6], [-1, 1, 2]]
left.addPlotable(laxes);
var tlabel = new Label("t", [6.25,0]);
tlabel.offset = [0,10];
left.addPlotable(tlabel);
var flabel = new Label("f(t)", [0,1.95]);
flabel.align = "left";
flabel.offset = [7, -3];
left.addPlotable(flabel);

var raxes = new Axes();
raxes.ticks = [[0, 1, 6], [0, 1, 4]]
raxes.labels = [[0, 1, 6], [0, 1, 4]]
right.addPlotable(raxes);

var xlabel = new Label("x", [6.25,0]);
xlabel.offset = [0,10];
right.addPlotable(xlabel);
var Flabel = new Label("F(x)", [0,3.9]);
Flabel.align = "left";
Flabel.offset = [7, -3];
right.addPlotable(Flabel);

var fgraph = new Graph(new Function(f));
fgraph.lineWidth = 2;
fgraph.strokeColor = "blue";
left.addPlotable(fgraph);

var Fgraph = new Graph(new Function(F));
Fgraph.lineWidth = 2;
Fgraph.strokeColor = "blue";
right.addPlotable(Fgraph);

var point = new Point([0, f(0)]);
point.style = "circle";
point.fillColor = "red";
point.size = 4;
point.move = function(p) {
    var x = p[0];
    if (x < 0 || x > xright) return;
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
    if (x <= xbreak1) {
	area1.domain = [0, x];
	area2.domain = [xbreak1, xbreak1];
	area3.domain = [xbreak2, xbreak2];
    } else if (x <= xbreak2) {
	area1.domain = [0, xbreak1];
	area2.domain = [xbreak1, x];
	area3.domain = [xbreak2, xbreak2];
    } else {
	area1.domain = [0, xbreak1];
	area2.domain = [xbreak1, xbreak2];
	area3.domain = [xbreak2, x];
    }
    Fpoint.point = [x, F(x)];
    left.draw();
    right.draw();
}

update();


