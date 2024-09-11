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
        const board = this.model.getBoard;
        this.view.renderBoard(board);
        this.model.setTwoCell();
        this.model.setTwoCell();
    }

    onUpdateViewChanged = (rowIndex, colIndex, score) => { 
        const board = this.model.getBoard;
        this.view.changeCellValue(rowIndex, colIndex, board, score);
    }

    onAddNewCell = (rowIndex, colIndex) => {
        this.view.addCellValue(rowIndex, colIndex);
    }

    playerController(){
        document.addEventListener("keyup", (event) => {
            if (event.code === "ArrowLeft") {
                console.log("влево смещение");
                this.model.slideLeft();
                this.model.setTwoCell();
            }
            else if (event.code === "ArrowRight"){
                console.log("вправо смещение");
                this.model.slideRight();
                this.model.setTwoCell();
            }
            else if (event.code === "ArrowUp"){
                console.log("вверх смещение");
                this.model.slideUp();
                this.model.setTwoCell();
            }
            else if (event.code === "ArrowDown"){
                console.log("вниз смещение");
                this.model.slideDown();
                this.model.setTwoCell();
            }
        });
    }
}