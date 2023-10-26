var points = [
       [-0.1089, -0.4686],
       [0.03809, 0.03762],
       [-0.1541, 0.02501],
       [-0.7425, -1.032],
       [0.4212, 0.3696],
       [0.05196, 0.2152],
       [0.07336, -0.2571],
       [0.3055, 0.2981],
       [0.2129, 0.4142],
       [-0.6119, -0.6454],
       [-1.517, -1.171],
       [-0.5661, -0.2404],
       [-0.9291, -0.7711],
       [-0.4114, -0.08569],
       [-0.3422, -0.4569],
       [0.1297, -0.03708],
       [-0.4028, -0.4117],
       [-0.3410, -0.3156],
       [-0.7008, -0.4612],
       [0.07621, 0.2640],
       [0.3844, 0.4556],
       [-0.8732, -0.4905],
       [0.04695, 0.1571],
       [-1.521, -1.411],
       [1.020, 0.8738],
       [0.5649, 0.6660],
       [-0.7821, -0.1304],
       [-0.3141, 0.0005517],
       [0.8761, 0.4109],
       [-0.5144, -0.6134],
       [0.9315, 0.3948],
       [0.5177, 0.7274],
       [0.02786, -0.2671],
       [-0.6965, -1.172],
       [1.167, 1.154],
       [0.01168, -0.4551],
       [-0.07156, -0.1869],
       [0.1978, 0.3184],
       [1.201, 1.175],
       [0.5386, 0.2717],
       [0.6361, 0.1469],
       [0.2955, -0.01380],
       [-0.1963, -0.1058],
       [0.4871, 0.8914],
       [-0.9016, -0.5534],
       [0.5861, 0.7761],
       [1.118, 1.489],
       [1.124, 0.6516],
       [0.05982, -0.05915],
       [-0.4019, -0.3706],
]

var totalvar = 0
for (var i = 0; i < points.length; i++) {
    p = points[i]
    totalvar += p[0]*p[0] + p[1]*p[1]
}

var animationRunning = false
var animate = document.getElementById("animate");
animate.onclick = function() {
    if (animationRunning) {
	animationRunning = false;
	stopAnimation();
	animate.innerText = "Start"
    } else {
	animationRunning = true;
	startAnimation(update, 20)
	animate.innerText = "Pause"
    }
}

size = 2
var canvas = new Canvas("canvas", [-size,-size,size,size])
canvas.margins = [5,5,5,5];
canvas.setUpCoordinates();

var angle = 0

var project = function(angle) {
    linepoints = []
    u = Math.cos(angle)
    v = Math.sin(angle)
    for (var i = 0; i < points.length; i++) {
	p = points[i]
	s = u*p[0] + v*p[1]
	linepoints.push([s*u, s*v])
    }
    return linepoints
}
linepoints = project(angle)

var grid = new Grid([-size,0.5,size], [-size,0.5,size])
canvas.addPlotable(grid)
var axes = new Axes()
canvas.addPlotable(axes)

var angleline = new Line([Math.cos(angle), Math.sin(angle)],
		    [-Math.cos(angle), -Math.sin(angle)])
angleline.infinite=true
canvas.addPlotable(angleline)

var lines = []
for (var i = 0; i < points.length; i++) {
    p = points[i]
    line = new Line(p, linepoints[i])
    line.strokeColor="red"
    lines.push(line)
    canvas.addPlotable(line)
}

var vpoints = []
for (var i = 0; i < points.length; i++) {
    p = new Point(linepoints[i])
    p.fillColor='blue'
    p.size=4
    vpoints.push(p)
    canvas.addPlotable(p)
}

for (var i = 0; i < points.length; i++) {
    p = new Point(points[i])
    p.size=4
    p.fillColor = "magenta"
    canvas.addPlotable(p)
}

var rectheight = 1
var rectwidth = 0.25
var total = new Rectangle([1.625, -2], [rectwidth, rectheight])
total.fillColor="red"
canvas.addPlotable(total)

var varbox = new Rectangle([1.625,-2], [rectwidth, 1])
varbox.fillColor="blue"
canvas.addPlotable(varbox)

dangle = Math.PI/400;

var update = function() {
    linepoints = project(angle)
    angleline.p0 = [Math.cos(angle), Math.sin(angle)]
    angleline.p1 = [-Math.cos(angle), -Math.sin(angle)]
    variance = 0
    for (var i = 0; i < points.length; i++) {
	p = linepoints[i]
	lines[i].p1 = p
	vpoints[i].point = p
	variance += p[0]*p[0] + p[1]*p[1]
    }
    varbox.dims = [rectwidth, variance/totalvar * rectheight]
    canvas.draw()
    angle += dangle;
}

update()


