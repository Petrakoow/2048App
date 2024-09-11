class GameView{
    constructor(){
        this.boardElement = document.getElementById('board-id');
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

    updateCell(cellElement, number){
        cellElement.textContent = "";
        cellElement.classList.value = "";
        cellElement.classList.add('tile');
        if (number < 0) {
            return;
        }

        cellElement.textContent = number;
        if (number <= 4096){
            cellElement.classList.add("x"+number.toString());
        } else {
            cellElement.classList.add("x8192");
        }
    }

    changeCellValue(rowIndex, colIndex, board){
        const tile = document.getElementById(`cell-${rowIndex}-${colIndex}`);
        const number = board[rowIndex][colIndex];
        this.updateCell(tile, number);
    }
}