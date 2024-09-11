class GameController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.model.bindUpdateView(this.onUpdateViewChanged); 
        this.model.bindAddNewCellView(this.onAddNewCell);
        this.initializationStartGame();
        this.playerController();
    }

    initializationStartGame(){
        this.model.board = this.model.createEmptyBoard(this.model.getRows, 
            this.model.getColumns);
        this.model.score = 0;

        this.view.renderBoard(this.model.board);
        this.model.setCell();
        this.model.setCell();
    }

    onUpdateViewChanged = (rowIndex, colIndex, score) => { 
        const board = this.model.getBoard;
        this.view.changeCellValue(rowIndex, colIndex, board, score);
    }

    onAddNewCell = (rowIndex, colIndex, value) => {
        this.view.addCellValue(rowIndex, colIndex, value);
    }

    playerController(){
        document.addEventListener("keyup", (event) => {
            let moveMade = false;
    
            if (event.code === "ArrowLeft") {
                this.model.slideLeft();
                moveMade = true;
            } else if (event.code === "ArrowRight") {
                this.model.slideRight();
                moveMade = true;
            } else if (event.code === "ArrowUp") {
                this.model.slideUp();
                moveMade = true;
            } else if (event.code === "ArrowDown") {
                this.model.slideDown();
                moveMade = true;
            }
    
            if (moveMade) {
                this.model.setCell();
                if (!this.model.hasMoveAvailable()) {
                    alert("Игра окончена! Начать заново.");
                    this.initializationStartGame(); 
                }
            }
        });
    }
}