import { Directive, ElementRef, HostListener, Injector, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-radio',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessor,
      multi: true,
    },
  ],
  standalone: false,
})
export class RadioValueAccessor extends ValueAccessor implements OnInit {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @Input() value: any;
  @Input() formControlName?: string;
  @Input() name?: string;

  @HostListener('change', ['$event.target'])
  handleChangeEvent(el: HTMLSixRadioElement): void {
    this.handleValueChange(el, this.value);
  }

  ngOnInit(): void {
    this.checkName();
  }

  override writeValue(value: any): void {
    this.el.nativeElement.checked = value === this.value;
    this.updateValidation();
  }

  private checkName(): void {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <six-input type="radio" formControlName="food" name="food">
    `);
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
      this.el.nativeElement.name = this.formControlName;
    }
  }
}
