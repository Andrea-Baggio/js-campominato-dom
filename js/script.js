const eleSelectLevel = document.querySelector('#select-level');
const eleBtnPlay = document.querySelector('#btn-play');
const eleStartScreen = document.querySelector('.start-screen');
const eleGrid = document.querySelector('.grid');

eleBtnPlay.addEventListener('click', clickPlay);

eleCell.addEventListener('click', toggleCell);

function clickPlay() {
	eleGrid.innerHTML = '';

	eleGrid.classList.remove('hidden');
	eleStartScreen.classList.add('hidden');

	const nCells = eleSelectLevel.value;

	const sideSquare = Math.sqrt(nCells);

	for (let i = 1; i <= nCells; i++) {
        const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		eleCell.innerHTML = i;
		eleCell.style.width = `calc(100% / ${sideSquare})`;
		eleCell.style.height = `calc(100% / ${sideSquare})`;
		eleGrid.append(eleCell);

		eleCell.addEventListener('click', toggleCell);
	}
}

function toggleCell() {
	this.classList.toggle('active');
}