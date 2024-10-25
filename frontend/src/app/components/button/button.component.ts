import { NgClass } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent implements OnInit {
  @Input() type: "link" | "fill" | "outlined";
  @Input() disabled: boolean = false;
  @Input() iconSuffix?: string;
  @Input() iconPrefix?: string;
  @Input() btnText?: string;

  ngOnInit() {
    console.log(
      "🚀 ~ ButtonComponent ~ ngOnInit ~ this.btnText:",
      this.btnText
    );
  }
}
