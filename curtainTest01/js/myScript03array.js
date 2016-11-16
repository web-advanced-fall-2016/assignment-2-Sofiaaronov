// make an array of segments with x and y values

// create a function CollisionDetection that compares the mouse position 
//with every segment within the array and returns the matched velue as a true boolean.

//take that segment that was matched and change its position in MouseDragged


var handleIn = new Point(-80, -0);
var handleOut = new Point(80, 0);
var firstPoint = new Point(500,500);
var lastPoint = new Point(1000,500);
var firstSegment = new Segment(firstPoint, null, handleOut);
var lastSegment = new Segment(lastPoint, handleIn, null);
var index = null;

var segmentsArray = [firstSegment, lastSegment];

var path = new Path(segmentsArray);
path.strokeColor = 'black'; 
path.fullySelected = true;

function onMouseDown(event) {
	// Add a segment to the path at the position of the mouse. 
	//if mouse down is on a segment, don't create a new seg but console log HIT
	for(i=0; i<= segmentsArray.length; i++){
		if(event.point != i){
 		path.insert(1, new Segment(event.point,handleIn,handleOut));
 		//now array has 3 segments, index 0,1,2
 		}else{
			console.log("HIT!");
 		}
 	}

 }

 function onMouseMove(event){
 	//go through the array of segments
 	for(i=0; i<= segmentsArray.length; i++){


 		if(i.x == event.point.x && i.y == event.point.y){
 			console.log(i);
 			
 			//assign i index value to a nex variable
 			var index = fruits.indexOf(i);
 		}
 	}
 }

 function onMouseDrag(event) {
	//take the segment whose position is the same of mouse move and 
	//change the position to mouse.x & y
	if(index != null )
segmentsArray[index] = event.point;

	
}
