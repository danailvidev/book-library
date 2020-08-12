import { Component, OnInit } from '@angular/core';

import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Book } from '@shared/library';
import { LibraryService } from '@shared/library/library.service';

@Component({
  selector: 'ch-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  public request: Book;

  constructor(
    private message: NzMessageService,
    protected drawerRef: NzDrawerRef<any>,
    private svc: LibraryService
  ) {}

  ngOnInit(): void {
    this.request = {
      id: '',
      title: ''
    };
  }

  public submit(request: Book) {
    this.svc
      .create(request)
      .pipe(
        catchError((err) => {
          const ERROR = err.error.error || new Error();
          this.message.create('error', ERROR);
          return throwError(err);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.drawerRef.close(res);
          this.message.create('success', 'Successfully Created');
        }
      });
  }

  public onCancel(event: any) {
    this.drawerRef.close('onCancel');
  }

  public onDelete(request: Book) {
    this.drawerRef.close('onDelete');
  }
}
