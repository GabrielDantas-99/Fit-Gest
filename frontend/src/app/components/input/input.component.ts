import { NgClass, NgIf } from "@angular/common";
import { Component, forwardRef, Input } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";

type InputTypes = "text" | "email" | "password";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.css",
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";
  @Input() icon: string = "";
  @Input() error: string | null = null;

  value: string = "";
  onChange: any = () => {};
  onTouched: any = () => {};

  inputPasswordState: string = "password";

  toggleVisibilityPassword() {
    this.inputPasswordState =
      this.inputPasswordState === "password" ? "text" : "password";
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
