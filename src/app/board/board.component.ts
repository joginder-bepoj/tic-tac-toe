import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() value: 'X' | 'O' | undefined;
  @Input() winner: any;
  @Input() index: any;
  constructor() {}
  ngOnInit(): void {}

  isActive(index: any) {
    if (this.winner) {
      if (this.winner.line.includes(index)) {
        return true;
      } else return false;
    } else return false;
  }
}
