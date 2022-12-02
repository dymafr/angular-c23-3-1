import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css']
})
export class FormFieldErrorExemple {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "L'email est requis";
    } else if (this.email.hasError('email')) {
      return "L'email n'est pas valide";
    } else {
      return "";
    }
  }

}