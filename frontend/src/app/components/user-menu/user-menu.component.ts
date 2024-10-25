import { Component, HostListener } from "@angular/core";
import { AvatarComponent } from "../avatar/avatar.component";
import { NgIf } from "@angular/common";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-user-menu",
  standalone: true,
  imports: [AvatarComponent, NgIf],
  templateUrl: "./user-menu.component.html",
  styleUrl: "./user-menu.component.css",
})
export class UserMenuComponent {
  constructor(private authService: AuthService) {}

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener("document:click", ["$event"])
  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (
      dropdownButton &&
      dropdownMenu &&
      !dropdownButton.contains(target) &&
      !dropdownMenu.contains(target)
    ) {
      this.isDropdownOpen = false;
    }
  }

  logout() {
    this.authService.logout();
  }
}
