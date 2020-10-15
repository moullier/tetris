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

    valid(p) {
        return p.shape.every((row, dy) => {
          return row.every((value, dx) => {
            let x = p.x + dx;
            let y = p.y + dy;
            console.log(`x = ${x}, y = ${y}`);
            return (
                value === 0 ||
             (this.insideWalls(x) &&
              this.aboveFloor(y)
            ));
          });
        });
      }

      insideWalls(x) {
        return x >= 0 && x < COLS;
      }
    
      aboveFloor(y) {
        return y < ROWS;
      }

}