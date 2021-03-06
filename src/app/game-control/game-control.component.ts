import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameIntervalEvent = new EventEmitter<number>();
  counter = 0;
  gameInterval: any;

  constructor() { }

  ngOnInit() {
    this.gameInterval = setInterval(() => {
      this.gameIntervalEvent.emit(this.counter++);
    }, 1000);
  }

  onGameStart() {
    this.gameInterval = setInterval(() => {
      this.gameIntervalEvent.emit(this.counter++);
    }, 1000);
  }

  onGameStop() {
    this.counter = 0;
    clearInterval(this.gameInterval);
  }

}
