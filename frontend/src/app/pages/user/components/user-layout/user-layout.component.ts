import { Component } from "@angular/core";
import { CommonLayoutComponent } from "../../../../components/common-layout/common-layout.component";
import { RouterOutlet } from "@angular/router";
import { MenuLink } from "../../../../interfaces/menu-link";

@Component({
  selector: "app-user-layout",
  standalone: true,
  imports: [CommonLayoutComponent, RouterOutlet],
  templateUrl: "./user-layout.component.html",
  styleUrl: "./user-layout.component.css",
})
export class UserLayoutComponent {
  sidebarlinks: MenuLink[] = [
    {
      title: "Visão Geral",
      route: "overview",
      icon: "dashboard",
    },
    {
      title: "Fichas",
      route: "sheets",
      icon: "groups",
    },
    {
      title: "Configurações",
      route: "settings",
      icon: "settings",
    },
  ];
}
