import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AcademyService {
  findAll(): import("rxjs").Observable<
    import("../models/response/academy-response-dto").AcademyResponseDTO[]
  > {
    throw new Error("Method not implemented.");
  }

  constructor() {}
}
