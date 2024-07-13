document.addEventListener("DOMContentLoaded", () => {
    const etchASketch = document.getElementById("etch-a-sketch");
    const resetbutton = document.getElementById("reset-button");
    const ctx = etchASketch.getContext("2d");
    const width = etchASketch.width;
    const height = etchASketch.height;
    
    ctx.lineWidth = 2;
    
    let drawing = false;

    // Create a two-dimensional array to store the opacity

    const opacityMap = Array.from(Array(width / 10), () => Array(height / 10).fill(0));

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function draw(e) {
        if(!drawing) return;

        const rect = etchASketch.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / 10);
        const y = Math.floor((e.clientY - rect.top) / 10);
    

        // Increase the opacity at the current position
        if (opacityMap[x][y] < 1) {
            opacityMap[x][y] += 0.1;
        }
            ctx.fillStyle = getRandomColor();
            ctx.globalAlpha = opacityMap[x][y];
            ctx.fillRect(x * 10, y * 10, 10, 10); // Draw a 10x10 square
            ctx.globalAlpha = 1.0 // Reset the opacity
    }
    
    function startDrawing() {
        drawing = true;
    }
    
    function stopDrawing() {
        drawing = false;
        ctx.beginPath(); // Start a new path
    }

    function resetDrwaing() {
        ctx.clearRect(0, 0, width, height);
        // Reset the opacity values
        for (let i = 0; i < width / 10; i++) {
            for (let j = 0; j < height / 10; i++) {
                opacityMap[i][j] = 0;
            }
        }
    }
    
    etchASketch.addEventListener('mousedown', startDrawing);
    etchASketch.addEventListener('mouseup', stopDrawing);
    etchASketch.addEventListener('mousemove', draw);
    resetbutton.addEventListener('click', resetDrwaing);
    
});



// Project: Etch-a-Sketch without features 

// document.addEventListener("DOMContentLoaded", function () {
//     const gridContainer = document.getElementById("gridContainer");
//     const resizeButton = document.getElementById('resizeButton');
//     const gridSize = 800; // Total width of the grid in pixels

//     function createGrid(squarePerSide) {
//         // Clean up the existing grid
//         gridContainer.innerHTML = '';
//         // Calculate the size of each cell
//         const cellSize = (gridSize / squarePerSide) - 2 // 2px is the space between cells
//         // Create the new grid
//         for (let i = 0; i < squarePerSide * squarePerSide; i++) {
//             const cell = document.createElement('cell');
//             cell.className = 'cell';
//             cell.style.width = `${cellSize}px`;
//             cell.style.height = `${cellSize}px`;
//             gridContainer.appendChild(cell);
//         }
//         // Old Code
//         //   for (let i = 0; i < 16 * 16; i++) {
//         //     const cell = document.createElement("div");
//         //     cell.className = "cell";
//         //     gridContainer.appendChild(cell);
//         //   }

//         //// Add hover effect for drawing mode
//         let isDrawing = false;

//         gridContainer.addEventListener("mousedown", () => (isDrawing = true));
//         gridContainer.addEventListener("mouseup", () => (isDrawing = false));
//         gridContainer.addEventListener("mouseLeave", () => (isDrawing = false));

//         gridContainer.addEventListener("mouseover", (e) => {
//             if (e.target.classList.contains("cell") && isDrawing) {
//                 e.target.style.backgroundColor = "#FF5733";
//             }
//         });

//         gridContainer.addEventListener("mousedown", (e) => {
//             if (e.target.classList.contains("cell)")) {
//                 e.target.style.backgroundColor = "FF5733";
//             }
//         });
//     }


//     resizeButton.addEventListener('click', () => {
//         let squarePerSide = prompt("Enter the number of squares per side:", 16);
//         squarePerSide = parseInt(squarePerSide);
//         if (Number.isInteger(squarePerSide) && squarePerSide > 0) {
//             createGrid(squarePerSide);
//         } else {
//             alert('Please enter a valid number.');
//         }
//     });
//     // Create standard grid
//     createGrid(16);
// });
