import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ButtonComponent } from "../../button/button.component";
import { NgClass } from "@angular/common";
import { SystemFeaturesComponent } from "../system-features/system-features.component";

@Component({
  selector: "app-auth-layout",
  standalone: true,
  imports: [ButtonComponent, NgClass, SystemFeaturesComponent],
  templateUrl: "./auth-layout.component.html",
  styleUrl: "./auth-layout.component.css",
})
export class AuthLayoutComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() btnPrimaryTxt: string = "";
  @Input() btnSecondaryTxt: string = "";
  @Input() disablePrimaryBtn: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
