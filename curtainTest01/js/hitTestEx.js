var values = {
	paths: 50,
	minPoints: 5,
	maxPoints: 15,
	minRadius: 30,
	maxRadius: 90
};

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

createPaths();

function createPaths() {
	var radiusDelta = values.maxRadius - values.minRadius;
	var pointsDelta = values.maxPoints - values.minPoints;
	for (var i = 0; i < values.paths; i++) {
		var radius = values.minRadius + Math.random() * radiusDelta;
		var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
		var path = createBlob(view.size * Point.random(), radius, points);
		var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
		var hue = Math.random() * 360;
		path.fillColor = { hue: hue, saturation: 1, lightness: lightness };
		path.strokeColor = 'black';
	};
}

function createBlob(center, maxRadius, points) {
	var path = new Path();
	path.closed = true;
	for (var i = 0; i < points; i++) {
		var delta = new Point({
			length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
			angle: (360 / points) * i
		});
		path.add(center + delta);
	}
	path.smooth();
	return path;
}

var segment, path, originalPosition;
var movePath = false;

Hammer(document.getElementById('canvas-1'))
.on("tap", function(event) {
	console.log(this, event);
})
.on("drag", function(event) {
	event.gesture.preventDefault();
	if (segment) {
		segment.point += delta;
		path.smooth();
	} else if (path) {
		path.position = [originalPosition.x + event.gesture.deltaX, originalPosition.y + event.gesture.deltaY];
	}
})
.on("touch", function(event) {
	segment = path = null;
	var point = [
		event.gesture.center.pageX - $('#canvas-1').offset().left,
		event.gesture.center.pageY - $('#canvas-1').offset().top
	];
	var hitResult = project.hitTest(point, hitOptions);
	if (!hitResult)
		return;

	// Commented out of the touch conversion because I can't be bothered.
	// if (event.modifiers.shift) {
	// 	if (hitResult.type == 'segment') {
	// 		hitResult.segment.remove();
	// 	};
	// 	return;
	// }

	if (hitResult) {
		path = hitResult.item;
		originalPosition = path.position;
		if (hitResult.type == 'segment') {
			segment = hitResult.segment;
		} else if (hitResult.type == 'stroke') {
			var location = hitResult.location;
			segment = path.insert(location.index + 1, point);
			path.smooth();
		}
	}
	movePath = hitResult.type == 'fill';
	if (movePath)
		project.activeLayer.addChild(hitResult.item);
	console.log(this, event.gesture);
})
.on("release", function(event) {
// 	project.activeLayer.selected = false;
// 	if (event.item)
// 		event.item.selected = true;
})
;