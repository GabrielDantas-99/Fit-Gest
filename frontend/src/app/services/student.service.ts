import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, first, tap } from "rxjs";
import { Student } from "../interfaces/student";
import { Page } from "../interfaces/page";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private _http: HttpClient) {}

  list(_page = 0, _limit = 10) {
    let baseUri = `http://localhost:3000/students?_page=${_page}&_limit=${_limit}`;
    return this._http.get<Student[]>(baseUri).pipe(
      first(),
      delay(3000),
      tap((students) => console.log(students))
    );
  }
}
