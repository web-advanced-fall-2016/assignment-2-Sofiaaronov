First experimentation with Paper.js.

For this assignment I decided to generate an algorithm that will control the behaviour of a bezier path on mouseDown and mouseDragged.

This is something I will need to regenerate in Processing and link to a Kinect for my thesis project, which will be an interactive installation with projection mapping.

See this video for demonstration:https://vimeo.com/191882531/e8e52a4b62

As shown in the video an interactive projection will act as an imaginary curtain: every time the curtain is raised a different world is shown.

What I am trying to achieve in this paper.js sketch is a first prototype of an algorithm that controls the “curtain edge” line. 

Every time the line is clicked a new segment is generated. When the mouse is clicked on one of the segments of the path line, the segment will be dragged, its coordinates will become mouse.x and mouse.y till released.




