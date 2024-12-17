import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AcademyResponseDTO } from "../../../../core/models/response/academy-response-dto";
import { AcademyService } from "../../../../core/services/academy.service";

@Component({
  selector: "app-academies",
  standalone: true,
  imports: [],
  templateUrl: "./academies.component.html",
  styleUrl: "./academies.component.css",
})
export class AcademiesComponent {
  academies$: Observable<AcademyResponseDTO[]> = null;

  constructor(private academyService: AcademyService) {
    this.academies$ = this.academyService.findAll();
  }
}
