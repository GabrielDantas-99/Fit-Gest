import { Student } from "../../interfaces/student";

export interface StudentPage {
  students: Student[];
  totalElements: number;
  totalPages: number;
}
