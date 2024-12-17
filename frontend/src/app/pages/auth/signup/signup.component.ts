import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { ToastrService } from "ngx-toastr";
import { AuthLayoutComponent } from "../../../shared/components/auth/auth-layout/auth-layout.component";
import { InputComponent } from "../../../shared/components/input/input.component";

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

  constructor(private router: Router, private toast: ToastrService) {
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
      this.toast.error("Preencha os campos corretamente!");
    } else {
      this.router.navigate(["overview"]);
    }
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
