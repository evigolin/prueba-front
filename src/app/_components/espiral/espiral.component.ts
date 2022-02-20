import { Component, OnInit } from '@angular/core';
declare const getPrintMatrix: (...args: any[]) => void;

@Component({
  selector: 'app-espiral',
  templateUrl: './espiral.component.html',
  styleUrls: ['./espiral.component.scss']
})
export class EspiralComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('spiral');
    
  }

}
