import { Component } from "@angular/core";
import { InputComponent } from "../input/input.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [InputComponent, DropdownComponent, UserMenuComponent],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.css",
})
export class ToolbarComponent {}
