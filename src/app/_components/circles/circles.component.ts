import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  r1!: number;
  r2!: number;
  t!: number;

  constructor() { }

  ngOnInit(): void {
    // Driver Code
    this.x1 = -10;
    this.y1 = 8;
    this.x2 = 14;
    this.y2 = -24;
    this.r1 = 30;
    this.r2 = 10;
    this.t = this.circle(this.x1, this.y1, this.x2, this.y2, this.r1, this.r2);

    // if (this.t == 1)
    //   document.write("círculo toque para" +
    //     " Uno al otro.");
    // else if (this.t < 0)
    //   document.write("Círculo no tocar" +
    //     " Uno al otro.");
    // else
    //   document.write("Intersección del círculo" +
    //     " Uno al otro.");

  }

  circle(x1: number, y1: number, x2: number, y2: number, r1: number, r2: number) {
    let distSq = (x1 - x2) * (x1 - x2) +
      (y1 - y2) * (y1 - y2);
    let radSumSq = (r1 + r2) * (r1 + r2);
    if (distSq == radSumSq)
      return 1;
    else if (distSq > radSumSq)
      return -1;
    else
      return 0;
  }
}
