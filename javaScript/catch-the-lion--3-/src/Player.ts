import { Piece, Griff, Lion, Elephant, Chick } from "./Piece";

export enum PlayerType {
  UPPER = "UPPER",
  LOWER = "LOWER"
}

export class Player {
  pieces: Piece[];

  constructor(
    public readonly type: PlayerType
  ) {
    if (type == PlayerType.UPPER) {
      this.pieces = [
        new Griff({ row: 0, col: 0 }, PlayerType.UPPER),
        new Lion({ row: 0, col: 1 }, PlayerType.UPPER),
        new Elephant({ row: 0, col: 2 }, PlayerType.UPPER),
        new Chick({ row: 1, col: 1 }, PlayerType.UPPER),
      ]
    } else {
      this.pieces = [
        new Elephant({ row: 3, col: 0 }, PlayerType.LOWER),
        new Lion({ row: 3, col: 1 }, PlayerType.LOWER),
        new Griff({ row: 3, col: 2 }, PlayerType.LOWER),
        new Chick({ row: 2, col: 1 }, PlayerType.LOWER),
      ]
    }
  }
}