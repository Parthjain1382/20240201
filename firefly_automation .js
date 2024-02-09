/**This is the code for the implementation of the "Jungu" Problem 
 * The requirement are widht and height should be 30 and 50
 * the Jungnu should not left the box created
 * The movement of jungu should be in either of 9 directions
 * Only one step can be taken by the "jungu"
*/

//Intializing the constants and variables 
const HEIGHT= 30;
const WIDTH = 50;

let starRow;
let starColumn;
let count = 0;

//  This Function will intialize the star positions at the start
function initializeStarPosition() {
    starRow = Math.floor(Math.random() * HEIGHT);
    starColumn = Math.floor(Math.random() * WIDTH);
}

// This will specify the position of the star after one complete cycle
function moveStar() {

    const rowChange = Math.floor(Math.random() * 3) - 1; 
		// Random number between -1, 0, and 1
    const colChange = Math.floor(Math.random() * 3) - 1; 
		// Random number between -1, 0, and 1

    // Update star coordinates by adding random movements
    starRow += rowChange;
    starColumn += colChange;

    // Ensure star stays within the box boundaries
    starRow = Math.max(0, Math.min(HEIGHT - 1, starRow));
    starColumn = Math.max(0, Math.min(WIDTH - 1, starColumn));
}

// This function will be used for firefly position and grid printing
function fireFly() {
    if (count === 0) {
        initializeStarPosition();
        count = 1;
    }
		PrintGrid(count);
}

/**This will print the grid structure
 * @param {number} count This will take number as an input
 * @returns {void} It does not return anything
 */
function PrintGrid(count)
{
	for (let i = 0; i < HEIGHT; i++) {
		for (let j = 0; j < WIDTH; j++) {
			//this is the condition for checking where to print star row and column 	
			if (i === starRow && j === starColumn) 
				{
						process.stdout.write("*");
				} 
			else  // condition to print the box with use of ('-,|,+, ) 
			{
				if ((i === 0 || i === HEIGHT - 1) && (j === 0 || j === WIDTH - 1)) {
						process.stdout.write("+");
				} else if (i === 0 || i === HEIGHT - 1) {
						process.stdout.write("-");
				} else if (j === 0 || j === WIDTH - 1) {
						process.stdout.write("|");
				} else {
						process.stdout.write(" ");
				}
			}
		}
		console.log("");
}
//This function will be responsible for moving the star
    moveStar();
}

/**This function will return the interval.
 * @param {Function} This will accept input aparameter as an function
 * @param {number} This will accept number as parameter 
*/
setInterval(fireFly, 200);