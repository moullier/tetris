class Board {

    // reset the board to blank when starting a new game
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // get matrix filled with zeros
    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
}