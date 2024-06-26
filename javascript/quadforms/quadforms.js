var bottommatrix = new Canvas("bottomsliders", [0,0, 2,2]);
var bottomleft = new Canvas("bottomleft", [-3,-3,3,3])
//var bottomright = new Canvas("bottomright", [-1,-4,1,4]);

bottommatrix.margins = [0,0,0,0]//[20,5,20,5];
bottommatrix.setUpCoordinates();
bottomleft.margins = [5,5,5,5];
bottomleft.setUpCoordinates();
//bottomright.margins = [5,5,5,5]
//bottomright.setUpCoordinates();

var dx = 0.05;
var mkslider = function(xr, y, canvas, method, label) {
    var s = new Slider(xr, y, [-2,2], method);
    s.ticks = [-2,1,2]
    s.labels = [-2,1,2]
    s.point.style = "box";
    s.point.fillColor = "blue"
    s.point.size = 4;
    label = new Label(label, [xr[0], y])
    label.offset = [-8,5]
    label.alignment = "rb"
    canvas.addPlotable(label)
    canvas.addPlotable(s);
    canvas.addMoveable(s);
    return s;
}

var bottomupdate = function() {
    var ma = ba.coordinate();
    var mb = bb.coordinate();
    var mc = bc.coordinate();
    var md = bd.coordinate();
    x = v.head[0];
    y = v.head[1];
    val = x*(ma*x + mb*y) + y*(mc*x + md*y);
    if (val < 0) {
	valueRect.ll = [2.25, val]
	valueRect.dims = [0.5, -val]
	valueRect.fillColor="red"
    } else {
	valueRect.ll = [2.25, 0]
	valueRect.dims = [0.5, val]
	valueRect.fillColor="blue"
    }
    bottommatrix.draw();
    bottomleft.draw();
//    bottomright.draw()
}

var ba = mkslider([dx, 1-2*dx], 1.5, bottommatrix, bottomupdate, "a");
var bb = mkslider([1+2*dx, 2-dx], 1.5, bottommatrix, bottomupdate, "b");
var bc = mkslider([dx, 1-2*dx], 0.5, bottommatrix, bottomupdate, "c");
var bd = mkslider([1+2*dx, 2-dx], 0.5, bottommatrix, bottomupdate,"d");
ba.init(1);
bb.init(0);
bc.init(0);
bd.init(1);

var blgrid = new Grid([-4,1,4], [-4,1,4]);
bottomleft.addPlotable(blgrid);

var blaxes = new Axes();
blaxes.labels = [[-4,1,4], [-4,1,4]]
blaxes.ticks = [[-4,1,4], [-4,1,4]]
bottomleft.addPlotable(blaxes);

var valueRect = new Rectangle([-0.5, 0], [1, 2])
valueRect.fillColor="red"
bottomleft.addPlotable(valueRect)

var circle = new Circle([0,0], 1);
circle.strokeColor="gray";
circle.fillColor=null;
circle.lineWidth=3;
bottomleft.addPlotable(circle);

var v = new Vector([1,0]);
v.fillColor="red";
v.strokeColor="black";
v.move = function(p) {
    l = Math.sqrt(p[0]*p[0] + p[1]*p[1])
    if (l == 0) return;
    x = p[0]/l;
    y = p[1]/l;
    v.head = [x, y]
    bottomupdate();
}
bottomleft.addPlotable(v);
bottomleft.addMoveable(v);



bottomupdate();


