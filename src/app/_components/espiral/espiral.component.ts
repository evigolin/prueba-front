import { Component, OnInit } from '@angular/core';
declare const getPrintMatrix: (...args: any[]) => void;

@Component({
  selector: 'app-espiral',
  templateUrl: './espiral.component.html',
  styleUrls: ['./espiral.component.scss']
})
export class EspiralComponent implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {

  }

}
