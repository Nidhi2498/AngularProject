import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[phoneMask]'
})
export class CustomDirective {

  private _phoneControl!:AbstractControl

  constructor() { }

}
