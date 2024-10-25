import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export interface PageEvent {
  pageIndex: number;
  pageSize: number;
  length: number;
}

@Component({
  selector: "app-paginator",
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, FormsModule],
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.css",
})
export class PaginatorComponent {
  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 10;
  @Input() length: number = 0;

  @Output() pageChange = new EventEmitter<PageEvent>();

  pageSizes: number[] = [5, 10, 25, 50];

  get totalPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  isFirstPage(): boolean {
    return this.pageIndex === 0;
  }

  isLastPage(): boolean {
    return this.pageIndex + 1 >= this.totalPages;
  }

  goToFirstPage(): void {
    if (!this.isFirstPage()) {
      this.pageIndex = 0;
      this.emitPageChange();
    }
  }

  goToPreviousPage(): void {
    if (!this.isFirstPage()) {
      this.pageIndex--;
      this.emitPageChange();
    }
  }

  goToNextPage(): void {
    if (!this.isLastPage()) {
      this.pageIndex++;
      this.emitPageChange();
    }
  }

  goToLastPage(): void {
    if (!this.isLastPage()) {
      this.pageIndex = this.totalPages - 1;
      this.emitPageChange();
    }
  }

  onPageSizeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = Number(selectElement.value);
    this.pageIndex = 0;
    this.emitPageChange();
  }

  private emitPageChange(): void {
    this.pageChange.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length,
    });
  }
}
