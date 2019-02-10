import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[plate]',
  // When the user updates the input
  host: {
    /* "(input)": "ref.nativeElement.value=$event.target.value.toUpperCase()" */
  }
})
export class PlateDirective {
  constructor(eNative: ElementRef) {
    eNative.nativeElement.onkeyup = e => {
      const value = e.target.value.toUpperCase();
      if (value.length === 3 && e.key != 'Backspace') {
        e.target.value = `${value}-`;
      } else {
        e.target.value = value;
      }
    };
  }
}
