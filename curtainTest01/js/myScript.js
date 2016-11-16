// create path
//var myPath = new Path();
//myPath.strokeColor = 'black';
//myPath.add(new Point(500, 500));
//myPath.add(new Point(1000, 500));
var handleIn = new Point(-80, -0);
var handleOut = new Point(80, 0);
var firstPoint = new Point(500,500);
var lastPoint = new Point(1000,500);
var firstSegment = new Segment(firstPoint, null, handleOut);
var lastSegment = new Segment(lastPoint, handleIn, null);
var grab;
var path = new Path(firstSegment, lastSegment);
path.strokeColor = 'black'; 
path.fullySelected = true;

// add a segment to the path everytime mouseDown, at the coordinates of mouse mouseDown
function onMouseDown(event) {
	// Add a segment to the path at the position of the mouse. 
	path.insert(1, new Segment(event.point,handleIn,handleOut));
	var grab = null;

	var hitResult = path.hitTest(event.point, { handles: true });
		if (hitResult) {
			console.log("HIT!")
				grab = hitResult.segment;
			
				};
		}

// move that segment while mouse dragged more precisely, if the 
//mouse is on a segment when drags happens, than move that segment
function onMouseDrag(event) {
	//segment[1].position = event.point;
	if (grab) {
			Segment.x += event.point.x;
			Segment.y += event.point.y;
		}
}
// change handles position while dragging to give the curtain/cloth effect
