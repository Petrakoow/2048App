class GameView{
    constructor(){
        this.boardElement = document.getElementById('board-id');
        this.scoreUI = document.getElementById('score-id');
    }

    renderBoard(board){
        this.boardElement.innerHTML = '';
        board.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                const cellElement = this.createCell(col, rowIndex, colIndex);
                this.updateCell(cellElement, board[rowIndex][colIndex]);
                this.boardElement.appendChild(cellElement);
            });
        });
    }

    createCell(col, rowIndex, colIndex){
        const cellElement = document.createElement('div');
        cellElement.textContent = col || '';
        cellElement.id = `cell-${rowIndex}-${colIndex}`;
        return cellElement;
    }

    updateCell(cellElement, number, score = 0){
        cellElement.textContent = "";
        cellElement.classList.value = "";
        cellElement.classList.add('tile');
        if (number < 0) {
            return;
        }
        console.log(score);
        this.scoreUI.textContent = score;

        cellElement.textContent = number;
        if (number <= 4096){
            cellElement.classList.add("x"+number.toString());
        } else {
            cellElement.classList.add("x8192");
        }
    }

    changeCellValue(rowIndex, colIndex, board, score){
        const cellElement = document.getElementById(`cell-${rowIndex}-${colIndex}`);
        const number = board[rowIndex][colIndex];
        this.updateCell(cellElement, number, score);
    }

    addCellValue(rowIndex, colIndex, value){
        const cellElement = document.getElementById(`cell-${rowIndex}-${colIndex}`);
        cellElement.textContent = value.toString();
        cellElement.classList.add("x2");
    }
}