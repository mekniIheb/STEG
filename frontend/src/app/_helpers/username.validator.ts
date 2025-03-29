import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const usernameRegex = /^[a-zA-Z0-9]*$/; // Alphanumeric characters only
    const valid = usernameRegex.test(value);
    return valid ? null : { invalidUsername: true };
  };
}
