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
  valor!: number | string;
  array: number[] = [];
  output: number[] = [];
  spirals: string[] = [];
  size!: number;

  constructor() { }

  ngOnInit(): void {
    console.log('spiral');
  }

  addValue(event: any) {
    if (
      this.n &&
      this.n > 0 &&
      this.valor &&
      this.n !== null &&
      this.valor !== null &&
      this.valor !== ''
    ) {
      if (this.array.length < this.size) {
        this.array.push(this.valor as number);
        this.valor = '';
        return;
      }

      if (this.array.length === this.size) {
        this.getPrintMatriz();
        return;
      }
    } else if (
      !this.n ||
      this.n === null
    ) {
      this.output = [];
      this.array = [];
    }
  }

  getSize(event: any) {
    if (event === null || !event) {
      this.output = [];
      this.array = [];
    }
    
    this.size = event * event;
  }

  getPrintMatriz() {
    this.output = getPrintMatrix(this.array, this.n);
  }

  clearStart(){
    this.output = [];
    this.array = [];
    this.valor = '';
  }
}
