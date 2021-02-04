import { Player, PlayerType } from './Player';
import { Board, Cell, Deadzone } from './board';
import { Griff, Lion, Elephant, Chick } from './Piece';

export class Game {
  private selectedCell: Cell;
  private turn = 0;
  private currentUser: Player;
  private gameInfoEl = document.querySelector('.alert');
  private state: 'STARTED' | 'END' = 'STARTED';

  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);

  readonly board: Board = new Board(this.upperPlayer, this.lowerPlayer);

  readonly upperDeadZone = new Deadzone(PlayerType.UPPER);
  readonly lowerDeadZone = new Deadzone(PlayerType.LOWER);

  constructor() {
    const boardContainer = document.querySelector('.board-container');
    boardContainer.firstChild.remove();
    boardContainer.appendChild(this.board.el);

    this.currentUser = this.upperPlayer;

    this.board.render();
    this.renderInfo();

    this.board.el.addEventListener('click', e => {
      if (this.state === 'END') {
        return false;
      }

      if (e.target instanceof HTMLElement) {
        let cellEl: HTMLElement;
        if (e.target.classList.contains("cell")) {
          cellEl = e.target;
        } else if (e.target.classList.contains("piece")) {
          cellEl = e.target.parentElement;
        } else {
          return false;
        }
        const cell = this.board.map.get(cellEl);

        if (this.isCurrentUserPiece(cell)) {
          this.select(cell);
          return false;
        }

        if (this.selectedCell) {
          this.move(cell);
          this.changeTurn();
        } else if (!this.selectedCell) {
          return false;
        } else {
          alert(`현재 유저는 ${this.currentUser.type} 입니다.`);
          return false;
        }
      }
    });
  }

  isCurrentUserPiece(cell: Cell) {
    return cell != null && cell.getPiece() != null && (cell.getPiece().ownerType === this.currentUser.type);
  }

  select(cell: Cell) {
    if (cell.getPiece() == null) {
      return;
    }

    if (cell.getPiece().ownerType !== this.currentUser.type) {
      return;
    }

    if (this.selectedCell) {
      this.selectedCell.deactive();
      this.selectedCell.render()
    }

    this.selectedCell = cell;
    cell.active();
    cell.render();
  }

  move(cell: Cell) {
    this.selectedCell.deactive();
    const killed = this.selectedCell.getPiece().move(this.selectedCell, cell).getKilled();
    this.selectedCell = cell;

    if (killed) {
      if (killed.ownerType === PlayerType.UPPER) {
        this.lowerDeadZone.add(killed);
      } else {
        this.upperDeadZone.add(killed);
      }

      if (killed instanceof Lion) {
        this.state = 'END';
      }
    }
  }

  renderInfo(extraMessage?: string) {
    this.gameInfoEl.innerHTML = `#${this.turn}턴 ${this.currentUser.type} 차례 ${(extraMessage) ? '| ' + extraMessage : ''}`;
  }

  changeTurn() {
    this.selectedCell.deactive();
    this.selectedCell = null;

    if (this.state === 'END') {
      this.renderInfo(`END! winner is ${this.currentUser.type}`);
    } else {
      this.turn += 1;
      this.currentUser = (this.currentUser === this.lowerPlayer) ? this.upperPlayer : this.lowerPlayer;
      this.renderInfo();
    }
    this.board.render();
  }

}
