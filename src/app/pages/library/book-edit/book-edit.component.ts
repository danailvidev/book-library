import { Component, OnInit } from '@angular/core';

import { NzDrawerRef } from 'ng-zorro-antd/drawer';

import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '@shared/library';
import { LibraryService } from '@shared/library/library.service';

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

@Component({
  selector: 'ch-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  public request: Book;

  constructor(
    public svc: LibraryService,
    protected drawerRef: NzDrawerRef<any>,
    protected message: NzMessageService
  ) {}

  ngOnInit(): void {}

  public onCancel(event: any) {
    this.drawerRef.close('onCancel');
  }

  public onDelete(request: Book) {
    if (request.id) {
      this.svc.delete(request.id).subscribe(
        (res) => {
          this.drawerRef.close('onDelete');
          this.createMessage(MessageType.SUCCESS, 'Successfully Deleted');
        },
        (err: HttpErrorResponse) => {
          if (err.error)
            this.message.error(err.error.error, {
              nzDuration: 5000,
              nzPauseOnHover: true
            });
        }
      );
    }
  }

  public submit(request: Book) {
    if (request) {
      this.svc
        .update(request.id, request)
        .pipe(
          catchError((err) => {
            const ERROR = err.error.error || new Error();
            this.createMessage(MessageType.ERROR, ERROR);
            return throwError(err);
          })
        )
        .subscribe((res: Book) => {
          if (res) {
            this.drawerRef.close(res);
            this.createMessage(MessageType.SUCCESS, 'Successfully Updated');
          }
        });
    }
  }

  public createMessage(type: MessageType, message: string) {
    switch (type) {
      case MessageType.SUCCESS:
        this.message.success(message);
        break;
      case MessageType.ERROR:
        this.message.error(message);
        break;
      case MessageType.WARNING:
        this.message.warning(message);
        break;
      default:
        break;
    }
  }
}
