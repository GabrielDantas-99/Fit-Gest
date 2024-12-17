import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgFor, NgIf } from "@angular/common";
import { NavLinkComponent } from "../nav-link/nav-link.component";
import { MenuLink } from "../../../core/models/menu-link";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive, NavLinkComponent],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  @Input() sidebarlinks: MenuLink[] = [];
}
