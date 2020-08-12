import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Book } from '@shared/library';

@Component({
  selector: 'ch-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  public bookForm: FormGroup;

  @Input() public request: Book;
  @Output() public submit = new EventEmitter<any>();
  @Output() public cancel = new EventEmitter<boolean>();
  @Output() public delete = new EventEmitter<Book>();

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    const { id, title, author, year, categories } = this.request;

    this.bookForm = this.fb.group({
      id: this.fb.control(id),
      title: this.fb.control(title, [Validators.required]),
      author: this.fb.control(author, [Validators.required]),
      year: this.fb.control(year, [Validators.required]),
      categories: this.fb.control(categories, [Validators.required])
    });
  }

  public onSubmit(e: Event) {
    e.stopPropagation();

    if (this.bookForm.valid) {
      this.submit.emit(this.bookForm.getRawValue());
    }
  }

  public onClose() {
    this.cancel.emit(true);
  }

  public onBack() {
    this.cancel.emit(true);
  }

  public onDelete(request: Book) {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this Service Connection?',
      nzContent: request.title,
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.delete.emit(request),
      nzCancelText: 'No',
      nzOnCancel: () => {}
    });
  }
}
