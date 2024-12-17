import { Component } from "@angular/core";
import { CommonLayoutComponent } from "../../../../shared/components/common-layout/common-layout.component";

@Component({
  selector: "app-overview",
  standalone: true,
  imports: [CommonLayoutComponent],
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.css",
})
export class OverviewComponent {
  constructor() {}
}
