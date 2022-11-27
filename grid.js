function makeGrid(numRowsCols) {
	const grid = document.querySelector(".grid-container");
	grid.style.gridTemplateColumns = `repeat(${numRowsCols}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${numRowsCols}, 1fr)`;
	for (let i = 0; i < numRowsCols ** 2; i++) {
		const gridItem = document.createElement("div");
		gridItem.className = "grid-item";
		grid.appendChild(gridItem);
	}
}

makeGrid(16);
