import { Component, OnInit } from "@angular/core";
import { InputComponent } from "../../../components/input/input.component";
import { ButtonComponent } from "../../../components/button/button.component";
import { TableComponent } from "../../../components/table/table.component";
import { Student } from "../../../interfaces/student";
import { catchError, Observable, of, tap } from "rxjs";
import { StudentService } from "../../../services/student.service";
import { PageEvent } from "@angular/material/paginator";
import { Page } from "../../../interfaces/page";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "../../../components/spinner/spinner.component";

@Component({
  selector: "app-students",
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    TableComponent,
    AsyncPipe,
    NgIf,
    MatProgressSpinnerModule,
    SpinnerComponent,
    NgFor,
  ],
  templateUrl: "./students.component.html",
  styleUrl: "./students.component.css",
})
export class StudentsComponent {
  students$: Observable<Student[]> | null = null;
  headers: string[] = ["Name", "Email", "Telefone", "Status"];
  pageIndex = 0;
  pageSize = 10;
  items: any[];

  constructor(private studentService: StudentService) {
    this.refresh();
  }

  refresh(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }) {
    this.students$ = this.studentService
      .list(pageEvent.pageIndex, pageEvent.pageSize)
      .pipe(
        tap((data) => {
          this.items = data;
          console.log("🚀 ~ StudentsComponent ~ tap ~ this.items:", this.items);
          this.pageIndex = pageEvent.pageIndex;
          this.pageSize = pageEvent.pageSize;
        }),
        catchError((error) => {
          alert("Erro ao carregar cursos.");
          return of([]);
        })
      );
  }

  returnStatus(status: boolean) {
    return status ? "Ativo" : "Inativo";
  }
}
