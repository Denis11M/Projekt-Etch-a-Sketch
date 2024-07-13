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


document.addEventListener("DOMContentLoaded", () => {
    const etchASketch = document.getElementById("etch-a-sketch");
    const resetbutton = document.getElementById("reset-button");
    const ctx = etchASketch.getContext("2d");
    const width = etchASketch.width;
    const height = etchASketch.height;

    ctx.lineWidth = 2;

    let drawing = false;

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function draw(e) {
        if(!drawing) return;

        const rect = etchASketch.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x, y, 10, 10);
    }

    function startDrawing() {
        drawing = true;
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    function resetDrwaing() {
        ctx.clearRect(0, 0, width, height);
    }

    etchASketch.addEventListener('mousedown', startDrawing);
    etchASketch.addEventListener('mouseup', stopDrawing);
    etchASketch.addEventListener('mousemove', draw);
    resetbutton.addEventListener('click', resetDrwaing);

});
