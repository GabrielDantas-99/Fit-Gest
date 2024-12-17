import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthResponse } from "../../../core/models/response/auth.response";
import { AuthService } from "../../../core/auth/auth.service";
import { AuthLayoutComponent } from "../../../shared/components/auth/auth-layout/auth-layout.component";
import { InputComponent } from "../../../shared/components/input/input.component";

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

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      user: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      this.toastr.error("Preencha os campos corretamente!");
    } else {
      this.authService
        .authenticate({
          user: this.loginForm.get("user").value,
          password: this.loginForm.get("password").value,
        })
        .subscribe({
          next: (authResponse: AuthResponse) => {
            console.log(
              "🚀 ~ LoginComponent ~ submit ~ authResponse:",
              authResponse
            );
          },
          error: (error) => {
            console.log("🚀 ~ LoginComponent ~ submit ~ error:", error);
          },
        });
    }
  }

  navigate() {
    this.router.navigate(["/signup"]);
  }
}
