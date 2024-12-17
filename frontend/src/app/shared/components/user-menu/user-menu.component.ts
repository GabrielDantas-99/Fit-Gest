import { Component, HostListener } from "@angular/core";
import { AvatarComponent } from "../avatar/avatar.component";
import { NgIf } from "@angular/common";
import { AuthService } from "../../../core/auth/auth.service";

@Component({
  selector: "app-user-menu",
  standalone: true,
  imports: [AvatarComponent, NgIf],
  templateUrl: "./user-menu.component.html",
  styleUrl: "./user-menu.component.css",
})
export class UserMenuComponent {
  username: string = "";
  useremail: string = "";

  constructor(private authService: AuthService) {
    this.username = authService.user.name;
    this.useremail = authService.user.email;
  }

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
