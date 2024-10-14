import { Component, Input } from "@angular/core";
import { MenuLink } from "../../interfaces/menu-link";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-nav-link",
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterLinkActive, NgClass],
  templateUrl: "./nav-link.component.html",
  styleUrl: "./nav-link.component.css",
})
export class NavLinkComponent {
  @Input() link: MenuLink;
  expandedLinks: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  ngOnInit() {
    const currentUrl = this.router.url;

    this.link.sublinks?.forEach((sublink) => {
      if (currentUrl.includes(sublink.route)) {
        this.expandedLinks[this.link.route] = true;
      }
    });
  }

  toggleSublinks(link: MenuLink) {
    if (link.sublinks) {
      this.expandedLinks[link.route] = !this.expandedLinks[link.route];
    }
  }

  closeAllSublinks() {
    this.expandedLinks = {};
  }
}
