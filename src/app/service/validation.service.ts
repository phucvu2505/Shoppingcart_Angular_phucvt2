import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  /**
   * validate positiveNumber
   */
  public static positiveNumber(control: AbstractControl): any {
    if (!control.value) {
      return;
    }
    return control.value
      .toString()
      .match(/^(([0-9]+)([\.]([0-9]+))?|([\.]([0-9]+))?)$/)
      ? ''
      : { positiveNumber: true };
  }
}
