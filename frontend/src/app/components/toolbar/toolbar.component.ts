import { Component } from "@angular/core";
import { InputComponent } from "../input/input.component";
import { DropdownUnitiesComponent } from "../dropdown-unities/dropdown-unities.component";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [InputComponent, DropdownUnitiesComponent, UserMenuComponent],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.css",
})
export class ToolbarComponent {}
