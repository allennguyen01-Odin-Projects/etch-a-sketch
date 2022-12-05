const colorInput = document.getElementById("etch-color");
let currentColor = colorInput.value;

function makeGrid(numRowsCols) {
	const grid = document.querySelector(".grid-container");
	grid.innerHTML = "";
	grid.style.gridTemplateColumns = `repeat(${numRowsCols}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${numRowsCols}, 1fr)`;
	for (let i = 0; i < numRowsCols ** 2; i++) {
		const gridItem = document.createElement("div");
		gridItem.className = "grid-item";
		grid.appendChild(gridItem);
	}
}

function changeGridItemColor() {
	gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((gridItem) => {
		gridItem.addEventListener("mouseover", () => {
			gridItem.style.backgroundColor = currentColor;
		});
	});
}

function clearGrid() {
	const clear = document.querySelector("#clear");
	const grid = document.querySelector(".grid-container");
	const gridItems = grid.children;
	clear.addEventListener("click", () => {
		for (let i = 0; i < gridItems.length; i++) {
			const gridItem = gridItems[i];
			gridItem.style.backgroundColor = "white";
		}
	});
}

function changeGridSize() {
	const gridSizeInput = document.getElementById("grid-size");
	gridSizeInput.addEventListener("input", () => {
		const gridSize = parseInt(gridSizeInput.value);
		console.log(gridSize);
		makeGrid(gridSize);
		changeGridItemColor();
	});
}

function changeCurrentColor() {
	colorInput.addEventListener("input", () => {
		currentColor = colorInput.value;
		console.log(currentColor);
	});
}

makeGrid(16);
changeGridItemColor();
clearGrid();
changeGridSize();
changeCurrentColor();
