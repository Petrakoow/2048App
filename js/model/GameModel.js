class GameModel{
    constructor(rows, columns){
        this.setRows = rows;
        this.setColumns = columns;
        this.score = 0;
        this.chance = 0.9;
        this.board = this.createEmptyBoard(this.getRows, this.getColumns);
    }

    set setRows(rows){
        if (!rows && Number.isInteger(rows)){
            throw new Error("rows must be int");
        }
        this.rows = rows;
    }

    set setColumns(columns){
        if (!columns && Number.isInteger(columns)){
            throw new Error("columns must be int");
        }
        this.columns = columns;
    }

    get getRows(){
        if (!this.rows && Number.isInteger(this.columns)){
            throw new Error("rows is 0 or undefined or null or NaN or not int");
        }
        return this.rows;
    }

    get getColumns(){
        if (!this.columns && Number.isInteger(this.columns)){
            throw new Error("columns is 0 or undefined or null or NaN or not int");
        }
        return this.columns;
    }

    get getBoard(){
        if (!this.board){
            throw new Error("board is undefined or null");
        }
        return this.board;
    }

    bindUpdateView(callback){
        this.updateView = callback;
    }

    bindAddNewCellView(callback){
        this.addNewView = callback;
    }

    createEmptyBoard(rows, columns){ 
        return Array.from({length: rows}, () => Array(columns).fill(0));
    }

    setCell(){
        if (!this.hasEmptyTile()) {
            return;
        }
        let found = false;
        while (!found) {
            let rowIndex = Math.floor(Math.random() * this.rows);
            let colIndex = Math.floor(Math.random() * this.columns);
    
            if (this.board[rowIndex][colIndex] === 0) {
                let randomValue = Math.random();
                let newValue = randomValue < this.chance ? 2 : 4;

                console.log(newValue, this.chance); 
                this.board[rowIndex][colIndex] = newValue; 
                this.addNewView(rowIndex, colIndex, newValue);
                found = true;
            }
        }
    }

    hasEmptyTile(){
        for (let row of this.board) {
            for (let col of row) {
                if (col === 0) {
                    return true;
                }
            }
        }
        return false;
    }

    filterZeroElements(row){
        return row.filter(num => num != 0);
    }

    slide(row){
        row = this.filterZeroElements(row);

        for (let index = 0; index < row.length - 1; index++) {
            if (row[index] == row[index + 1]){
                row[index] *= 2;
                row[index + 1] = 0;
                this.score += row[index];
            }
        }

        row = this.filterZeroElements(row);

        while (row.length < this.getColumns){
            row.push(0);
        }
        return row;
    }

    slideLeft(){
        for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
            let rowCells = this.board[rowIndex];
            rowCells = this.slide(rowCells);
            this.board[rowIndex] = rowCells;
            for (let colIndex = 0; colIndex < this.getColumns; colIndex++) {
                this.updateView(rowIndex, colIndex, this.score);
            }
        }
    }

    slideRight(){
        for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
            let rowCells = this.board[rowIndex];
            rowCells.reverse();
            rowCells = this.slide(rowCells);
            rowCells.reverse();
            this.board[rowIndex] = rowCells;
            for (let colIndex = 0; colIndex < this.getColumns; colIndex++) {
                this.updateView(rowIndex, colIndex, this.score);
            }
        }
    }

    slideUp(){
        for (let columnIndex = 0; columnIndex < this.getColumns; columnIndex++) {
            let row = [this.board[0][columnIndex], 
            this.board[1][columnIndex], this.board[2][columnIndex], this.board[3][columnIndex]];
            row = this.slide(row);

            for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
                this.board[rowIndex][columnIndex] = row[rowIndex];
                this.updateView(rowIndex, columnIndex, this.score);
            }
        }
    }

    slideDown(){
        for (let columnIndex = 0; columnIndex < this.getColumns; columnIndex++) {
            let row = [this.board[0][columnIndex], 
                this.board[1][columnIndex], this.board[2][columnIndex], this.board[3][columnIndex]];
            row.reverse();
            row = this.slide(row);
            row.reverse();
            for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
                this.board[rowIndex][columnIndex] = row[rowIndex];
                this.updateView(rowIndex, columnIndex, this.score);
            }
        }
    }

    hasMoveAvailable() {
        if (this.hasEmptyTile()) {
            return true;
        }
    
        for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
            for (let colIndex = 0; colIndex < this.getColumns; colIndex++) {
                let current = this.board[rowIndex][colIndex];
    
                if (colIndex < this.getColumns - 1 && current === this.board[rowIndex][colIndex + 1]) {
                    return true;  
                }
                if (rowIndex < this.getRows - 1 && current === this.board[rowIndex + 1][colIndex]) {
                    return true; 
                }
            }
        }
    
        return false;
    }
}