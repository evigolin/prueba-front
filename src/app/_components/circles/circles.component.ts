import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive forms';
  circlesForm: FormGroup;
  intersectionCircle: any[] = [];
  circlesAll: any[] = [];

  constructor(
    private fb: FormBuilder,

  ) {
    this.circlesForm = this.fb.group({
      circles: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addCircles();
    this.addCircles();
    // this.t = this.findCircleCollisions(this.x1, this.y1, this.x2, this.y2, this.r1, this.r2);

    // if (this.t == 1)
    //   console.log("círculo toque para" + " Uno al otro.");
    // else if (this.t < 0)
    //   console.log("Círculo no tocar" + " Uno al otro.");
    // else
    //   console.log("Intersección del círculo" + " Uno al otro.")

  }

  get f() {
    return this.circlesForm.controls;
  }

  get circles(): FormArray {
    return this.circlesForm.get("circles") as FormArray;
  }

  newCircle(): FormGroup {
    let name = 'Circulo ' + (this.circles.controls.length + 1);
    return this.fb.group({
      nombre: name,
      x: '',
      y: '',
      radio: '',
    })
  }

  addCircles() {

    if (this.circles.controls.length >= 2) {
      for (const circle of this.circles.controls) {
        if ((circle.get('x')?.value === '' || circle.get('x')?.value === null) || (circle.get('y')?.value === '' || circle.get('y')?.value === null) || (circle.get('radio')?.value === '' || circle.get('radio')?.value === null)) {
          alert('Debe ingresar la información de cada circulo');
          return;
        }
      }
    }

    this.circles.push(this.newCircle());
  }

  removeCircle(i: number) {
    this.circles.removeAt(i);
  }

  findCircleCollisions(circle1: any, circle2: any) {
    let dx = circle2['x'] - circle1['x'];
    let dy = circle2['y'] - circle1['y'];
    let radio = circle2['radio'] + circle1['radio'];
    if (radio > Math.sqrt((dx * dx) + (dy * dy))) {
      return true;
    }
    else {
      return false;
    }
  }

  interceptionCircles(event: any) {
    this.intersectionCircle = [];
    
    for (const circle of this.circles.controls) {
      if ((circle.get('x')?.value === '' || circle.get('x')?.value === null) || (circle.get('y')?.value === '' || circle.get('y')?.value === null) || (circle.get('radio')?.value === '' || circle.get('radio')?.value === null)) {
        return;
      }
    }

    for (let index = 0; index < this.circles.controls.length; index++) {
      for (let i = (index + 1); i < this.circles.controls.length; i++) {
        const resp = this.findCircleCollisions(this.circles.controls[index]?.value, this.circles.controls[i]?.value);

        if (resp) {
          const circle = {
            circle_1: index,
            circle_2: i
          }
          this.intersectionCircle.push(circle);
        }
      }
    } 
  }
}
