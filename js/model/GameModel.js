class GameModel{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.score = 0;
        this.board = this.createEmptyBoard(this.getRows, this.getColumns);
    }

    get getRows(){
        if (!this.rows){
            throw new Error("rows is 0 or undefined or null or NaN");
        }
        return this.rows;
    }

    get getColumns(){
        if (!this.columns){
            throw new Error("columns is 0 or undefined or null or NaN");
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

    createEmptyBoard(rows, columns){
        return Array.from({length: rows}, () => Array(columns).fill(0));
    }

    filterZeroElements(row){
        return row.filter(num => num != 0);
    }

    slide(row){
        row = this.filterZeroElements(row);

        for (let index = 0; index < row.length - 1; index++) {
            if (row[i] == row[i + 1]){
                row[i] *= 2;
                row[i+1] = 0;
                this.score += row[i];
            }
        }

        row = this.filterZeroElements(row);

        while (row.length < this.getColumns){
            row.push(0);
        }
        return row;
    }

    slideLeft(updateView){
        for (let rowIndex = 0; rowIndex < this.getRows; rowIndex++) {
            let rowCells = this.board[rowIndex];
            rowCells = this.slide(rowCells);
            this.board[rowIndex] = rowCells;
            for (let colIndex = 0; colIndex < this.getColumns; colIndex++) {
                this.updateView(rowIndex, colIndex);
            }
        }
    }
}