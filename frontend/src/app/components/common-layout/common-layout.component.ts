import { Component, Input } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { MenuLink } from "../../interfaces/menu-link";
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
  selector: "app-common-layout",
  standalone: true,
  imports: [SidebarComponent, ToolbarComponent, RouterOutlet],
  templateUrl: "./common-layout.component.html",
  styleUrl: "./common-layout.component.css",
})
export class CommonLayoutComponent {
  @Input() sidebarlinks: MenuLink[];
}
