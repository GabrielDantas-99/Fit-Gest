import { Component } from "@angular/core";
import { CommonLayoutComponent } from "../../../components/common-layout/common-layout.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-overview",
  standalone: true,
  imports: [CommonLayoutComponent],
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.css",
})
export class OverviewComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.url);
  }
}
