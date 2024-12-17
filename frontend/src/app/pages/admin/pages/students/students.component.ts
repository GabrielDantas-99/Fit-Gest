import { Component, OnInit } from "@angular/core";
import { Student } from "../../../../core/models/student";
import { catchError, Observable, of, tap } from "rxjs";
import { PageEvent } from "@angular/material/paginator";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { InputComponent } from "../../../../shared/components/input/input.component";
import { SpinnerComponent } from "../../../../shared/components/spinner/spinner.component";
import { TableComponent } from "../../../../shared/components/table/table.component";
import { StudentService } from "../../../student/services/student.service";

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
    // this.students$ = this.studentService
    //   .list(pageEvent.pageIndex, pageEvent.pageSize)
    //   .pipe(
    //     tap((data) => {
    //       this.items = data;
    //       this.pageIndex = pageEvent.pageIndex;
    //       this.pageSize = pageEvent.pageSize;
    //     }),
    //     catchError((error) => {
    //       alert("Erro ao carregar cursos.");
    //       return of([]);
    //     })
    //   );
  }

  returnStatus(status: boolean) {
    return status ? "Ativo" : "Inativo";
  }
}
