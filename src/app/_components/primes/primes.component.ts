import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.scss']
})
export class PrimesComponent implements OnInit {
  quantityPrimers!: number | string;
  primers: number[] = [];
  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('Números primos');
  }

  isPrimeNum(num: number) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    };
    return true;
  }

  printNPrimers(event: number) {
    this.flag = true;
    this.primers = [];
    this.quantityPrimers = event;

    if (!event) {
      this.flag = false;
      return;
    }

    if (event) {
      for (let index = 2; index; index++) {
        if (this.isPrimeNum(index)) {
          this.primers.push(index);

          if (this.primers.length == event) {
            this.flag = false;
            return;
          }
        }
      }
    }

  }

}
