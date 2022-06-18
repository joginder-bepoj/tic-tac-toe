import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  sqaures: any = [];
  xIsNext = true;
  winner: any;
  counter = 0;
  isDraw = '';
  constructor() {}
  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.sqaures = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
    this.isDraw = '';
    this.counter = 0;
  }
  get player() {
    if (this.winner) {
      return null;
    }
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    if (!this.sqaures[idx]) {
      this.sqaures.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
    this.winner = this.calculateWinner();
    if (!this.winner && this.counter == 9) {
      this.isDraw = 'yes';
    }
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.sqaures[a] &&
        this.sqaures[a] === this.sqaures[b] &&
        this.sqaures[a] === this.sqaures[c]
      ) {
        return {
          winner: this.sqaures[a],
          line: lines[i],
        };
      }
    }
    return null;
  }
}
