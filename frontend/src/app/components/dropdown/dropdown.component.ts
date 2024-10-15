import { NgFor, NgIf } from "@angular/common";
import { Component, HostListener } from "@angular/core";
interface Unity {
  id: number;
  name: string;
}
@Component({
  selector: "app-dropdown",
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.css",
})
export class DropdownComponent {
  list: Unity[] = [
    { id: 1, name: "Uni. Roberto Freire" },
    { id: 2, name: "Uni. Prudente de Morais" },
    { id: 3, name: "Uni. Candelária" },
  ];

  selectedUnity: Unity | null = this.list[0];
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnity(unity: Unity) {
    this.selectedUnity = unity;
    this.isDropdownOpen = false;
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
}
