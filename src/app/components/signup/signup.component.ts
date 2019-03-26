import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  submit(): void {
    if (!this.form.valid) {
      alert('invalid form');
      return;
    }

    const { name, email, password } = this.form.value;
    // this.signupService.login(name, email, password);
    console.log('name', name);
    console.log('email', email);
    console.log('password', password);
    alert('valid form');
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ]
    });
  }
}
