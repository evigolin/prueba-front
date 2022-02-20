import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
declare function getPrintMatrix(
  arrayNumbers: number[],
  nOption: number
): number[];

@Component({
  selector: 'app-espiral',
  templateUrl: './espiral.component.html',
  styleUrls: ['./espiral.component.scss'],
})
export class EspiralComponent implements OnInit {
  title = 'FormArray in Angular Reactive forms';
  n!: number;
  valor!: number;
  array: number[] = [];
  output: number[] = [];
  spirals: string[] = [];
  size!: number;

  constructor() {}

  ngOnInit(): void {
    console.log('spiral');
  }

  addValue(event: any) {
    if (
      this.n &&
      this.n > 0 &&
      this.valor &&
      this.n !== null &&
      this.valor !== null
    ) {
      if (this.array.length < this.size) {
        this.array.push(this.valor);
        return;
      }

      if (this.array.length === this.size) {
        this.getPrintMatriz();
        return;
      }
    }
      
    this.array = [];
    
  }

  getSize(event: any) {
    this.size = event * event;
    console.log(this.size);
  }

  getPrintMatriz() {
    this.output = getPrintMatrix(this.array, this.n);
    console.log('Final Result');
    console.log(this.output);
  }
}
