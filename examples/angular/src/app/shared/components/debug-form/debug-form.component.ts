import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAbstractControlProps } from '~/app/reactive-form/util';
import { changeDetection, encapsulation } from '~/app/shared';

type AsyncInput<T> = T | null | undefined;

const isDefined = <T>(value: AsyncInput<T>): value is T => value !== null && value !== undefined;

@Component({
  selector: 'app-debug-form',
  template: `
    <div>
      <six-button (click)="closed = !closed">{{ closed ? 'Debug form' : 'Hide' }}</six-button>
      <pre [hidden]="closed">{{ info$ | async | json }}</pre>
    </div>
  `,
  changeDetection,
  encapsulation,
})
export class DebugFormComponent implements OnChanges {
  @Input() form: AsyncInput<FormGroup>;

  info$?: Observable<{}>;

  closed = true;

  ngOnChanges(changes: SimpleChanges) {
    if (isDefined(this.form)) {
      this.info$ = combineLatest([this.form.statusChanges, this.form.valueChanges]).pipe(
        map(() => {
          if (isDefined(this.form)) {
            const { controls } = this.form;
            return {
              form: getAbstractControlProps(this.form),
              controls: Object.keys(controls).reduce((acc, name) => {
                return { ...acc, [name]: getAbstractControlProps(controls[name]) };
              }, {}),
            };
          }
          return {};
        })
      );
    }
  }
}
