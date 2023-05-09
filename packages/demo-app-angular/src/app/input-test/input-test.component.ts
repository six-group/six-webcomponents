import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
})
export class InputTestComponent {
  @ViewChild('myInput')
  inputField: any;
  counter = new BehaviorSubject(0);

  name = new FormControl('');

  constructor() {
    setInterval(() => {
      this.counter.next(this.counter.value + 1);
      console.log(typeof this.inputField.value);
    }, 100000);
  }

  inputChanged($event: any) {
    const value = $event;
    console.log(typeof value);
  }
}
