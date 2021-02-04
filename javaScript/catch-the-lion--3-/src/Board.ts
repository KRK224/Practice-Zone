import { Player, PlayerType } from "./Player";
import { Piece } from "./Piece";

export interface Position {
  row: number;
  col: number;
}

export class Cell {
  private isActive = false;
  readonly _el: HTMLElement = document.createElement('DIV');

  constructor(
    public readonly poisiton: Poisiton,
    private piece: Piece
  ) {
    this._el.classList.add('cell');
  }

  put(piece: Piece) {
    this.piece = piece;
  }

  getPiece() {
    return this.piece;
  }

  active() {
    this.isActive = true;
  }

  deactive() {
    this.isActive = false;
  }

  render() {
    if (this.isActive) {
      this._el.classList.add('active');
    } else {
      this._el.classList.remove('active');
    }

    if (this.getPiece() && this.getPiece().ownerType === PlayerType.UPPER) {
      this._el.classList.add('upper');
    } else {
      this._el.classList.remove('upper');
    }
    this._el.innerHTML = (this.piece) ? this.piece.render() : '';
  }
}

export class Board {
  cells: Cell[] = [];
  el: Element = document.createElement('div');
  map: WeakMap<HTMLElement, Cell> = new WeakMap();

  constructor(upperPlayer: Player, lowerPlayer: Player) {
    this.el.className = 'board';

    for (let row = 0; row < 4; row++) {
      const rowEl = document.createElement('div')
      rowEl.className = 'row';
      this.el.appendChild(rowEl);

      for (let col = 0; col < 3; col++) {
        const piece =
          upperPlayer.pieces.find(({ currentPosition }) => currentPosition.col === col && currentPosition.row === row) ||
          lowerPlayer.pieces.find(({ currentPosition }) => currentPosition.col === col && currentPosition.row === row);

        const cell = new Cell({ row, col }, piece);
        this.map.set(cell._el, cell);
        this.cells.push(cell);
        rowEl.appendChild(cell._el);
      }
    }
  }

  render() {
    this.cells.forEach(v => v.render());
  }
}

export class Deadzone {
  private cells: Cell[] = [];
  readonly deadzoneEl = document.getElementById(`${this.type}_deadzone`).querySelector('.card-body');

  constructor(public readonly type: PlayerType) {
    for (let index = 0; index < 4; index++) {
      const cell = new Cell({ col: index, row: 0 }, null);
      this.cells.push(cell);
      this.deadzoneEl.appendChild(cell._el);
    }
  }

  add(piece: Piece) {
    const emptyCell = this.cells.find(v => v.getPiece() == null);
    emptyCell.put(piece);
    emptyCell.render();
  }

  render() {
    this.cells.forEach(v => v.render());
  }

}
