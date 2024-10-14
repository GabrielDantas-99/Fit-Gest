import { Component } from "@angular/core";
import { CommonLayoutComponent } from "../../../../components/common-layout/common-layout.component";
import { MenuLink } from "../../../../interfaces/menu-link";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [CommonLayoutComponent, RouterOutlet],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.css",
})
export class AdminLayoutComponent {
  sidebarlinks: MenuLink[] = [
    {
      title: "Visão Geral",
      route: "overview",
      icon: "dashboard",
    },
    {
      title: "Alunos",
      route: "students",
      icon: "groups",
    },
    {
      title: "Exercícios",
      icon: "fitness_center",
      sublinks: [
        {
          title: "Modalidades",
          route: "modalities",
        },
        {
          title: "Exercícios",
          route: "exercises",
        },
      ],
    },
    {
      title: "Configurações",
      route: "settings",
      icon: "settings",
    },
  ];
}
