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

function changeGridItemColor() {
	gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((gridItem) => {
		gridItem.addEventListener("mouseover", () => {
			gridItem.classList.add("drawn");
		});
	});
}

makeGrid(32);
changeGridItemColor();
