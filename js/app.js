function init() {
    try {
        const model = new GameModel(4, 4);
        const view = new GameView();
        const controller = new GameController(model, view);
        console.log(model);
    } catch (error) {
        console.error("Ошибка при инициализации приложения 2048", error);
    }
}

document.addEventListener('DOMContentLoaded', init);