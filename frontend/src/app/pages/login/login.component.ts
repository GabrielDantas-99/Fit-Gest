import { Component } from "@angular/core";
import { AuthLayoutComponent } from "../../components/auth/auth-layout/auth-layout.component";
import { InputComponent } from "../../components/input/input.component";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

interface LoginForm {
  user: FormControl;
  password: FormControl;
}

@Component({
  selector: "app-login",
  standalone: true,
  imports: [AuthLayoutComponent, InputComponent, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      user: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    console.log("Login!");
  }

  hasError() {
    return {
      userError: !this.loginForm.get("user").valid
        ? "Campo 'Usuário' inválido'"
        : false,
      passwordError: !this.loginForm.get("password").valid
        ? "Campo 'Usuário' inválido'"
        : false,
    };
  }

  navigate() {
    console.log("alow");
    this.router.navigate(["/signup"]);
  }
}
