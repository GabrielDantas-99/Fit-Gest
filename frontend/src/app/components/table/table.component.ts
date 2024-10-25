import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PaginatorComponent } from "../paginator/paginator.component";
import { Student } from "../../interfaces/student";
import { Page } from "../../interfaces/page";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    AsyncPipe,
    MatProgressSpinnerModule,
    PaginatorComponent,
  ],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.css",
})
export class TableComponent<T> implements OnInit {
  @Input() datasource: T[];
  @Input() headers: string[] = [];
  @Input() booleanUtil: (bool: boolean) => string;
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Input() totalElements: number = 0;

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalElements / this.pageSize);
  }

  getCellValue(item: T, index: number): any {
    let value = (item as any)[Object.keys(item)[index]];
    return typeof value == "boolean" ? this.booleanUtil(value) : value;
  }

  emitPageChange(): void {
    this.pageChange.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.totalElements,
    });
  }

  goToFirstPage() {
    this.pageIndex = 0;
    this.emitPageChange();
  }

  goToPreviousPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.emitPageChange();
    }
  }

  goToNextPage() {
    if (this.pageIndex + 1 < this.totalPages) {
      this.pageIndex++;
      this.emitPageChange();
    }
  }

  goToLastPage() {
    this.pageIndex = this.totalPages - 1;
    this.emitPageChange();
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.pageIndex = 0;
    this.emitPageChange();
  }
  getCellClass(item: T, index: number): any {
    let value = (item as any)[Object.keys(item)[index]];
    return typeof value == "boolean" ? this.getClass(value) : "";
  }
  getClass(value: boolean): any {
    return value ? "true-cell" : "false-cell";
  }
}
