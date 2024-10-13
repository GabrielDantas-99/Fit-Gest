import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthLayoutComponent } from "../../components/auth/auth-layout/auth-layout.component";
import { InputComponent } from "../../components/input/input.component";
import { Router } from "@angular/router";

interface SignupForm {
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  password: FormControl;
  repeatPassword: FormControl;
}

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [AuthLayoutComponent, InputComponent, ReactiveFormsModule],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.css",
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;
  fieldsErrors = [];

  constructor(private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(9),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    if (!this.signupForm.valid) {
      alert("Preencha os campos corretamente!");
    } else {
      alert("login");
    }
  }

  hasError(field: string, errorType: string): boolean {
    const control = this.signupForm.get(field);
    return control && control.hasError(errorType) && control.touched;
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
