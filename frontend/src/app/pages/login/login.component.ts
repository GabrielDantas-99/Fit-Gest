import { Component } from "@angular/core";
import { AuthLayoutComponent } from "../../components/auth/auth-layout/auth-layout.component";
import { InputComponent } from "../../components/input/input.component";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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

  constructor(private toastr: ToastrService, private router: Router) {
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
      this.router.navigate(["admin/overview"]);
    }
  }

  navigate() {
    this.router.navigate(["/signup"]);
  }
}
