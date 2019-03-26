import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  submit(): void {
    if (!this.form.valid) {
      alert('invalid form');
      return;
    }

    const { email, password } = this.form.value;
    // this.loginService.login(email, password);
    console.log('email', email);
    console.log('password', password);
    alert('valid form');
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ]
    });
  }
}
