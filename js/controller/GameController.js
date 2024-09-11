class GameController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.model.bindUpdateView(this.onUpdateViewChanged);
    }

    onUpdateViewChanged = (rowIndex, colIndex) => {
        const board = this.model.getBoard;
        this.view.changeCellValue(rowIndex, colIndex, board);
    }

    handleUpdateViewState(){
        this.view.updateCell();
    }

    playerController(){
        document.addEventListener("keyup", (event) => {
            if (event.code === "ArrowLeft") {
                this.model.slideLeft();
            }
        });
    }
}