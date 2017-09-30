    var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(360, 360); 
        frameRate(30);
        
        // ProgramCodeGoesHere
		var xPositions = [10, 100, 200, 300, 190, 290, 390, 350];
		var yPositions = [0, 100, 0, 100, 0, 100, 0, 100];
		var colors = [color(242, 9, 9), color(59, 5, 5), color(238, 242, 17), color(232, 9, 232), color(12, 237, 23), color(8, 21, 207), color(245, 201, 245), color(230, 103, 30)];

		draw = function() {
			background(204, 247, 255);
    
			for (var round = 0; round < 2; round++) {    
				for (var i = 0; i < xPositions.length; i++) {
        
					noStroke();
					fill(colors[i]);
					ellipse(xPositions[i], yPositions[i], 10, 10);
					rect(xPositions[i] * 5, yPositions[i] * 4, 15, 15);
					ellipse(xPositions[i] * 2, yPositions[i] * 2, 20, 20);
					rect(xPositions[i] * 3, yPositions[i] * 3, 25, 25);
        
					if (yPositions[i] > 400) {
						yPositions[i] = 0;
					}
        
					yPositions[i] += 5;
				}
			}
		};
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 