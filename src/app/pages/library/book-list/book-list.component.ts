import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { NzDrawerService } from 'ng-zorro-antd/drawer';

import { LibraryService } from '@shared/library/library.service';
import { ENVIRONMENT } from '@shared/shared';
import { Book } from '@shared/library';
import { AbstractListComponent } from '@shared/abstract/abstract-list.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { NewBookComponent } from '../new-book/new-book.component';

@Component({
  selector: 'ch-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends AbstractListComponent<Book> implements OnInit, OnDestroy {
  public mapOfSort = {
    title: null,
    year: null,
    categories: null
  };

  constructor(
    @Inject(ENVIRONMENT) env: any,
    public svc: LibraryService,
    private drawerService: NzDrawerService
  ) {
    super(env, svc);
  }

  ngOnInit(): void {
    this.fetchLatest(this.lastParams);
    super.ngOnInit();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public onItemClick(item: Book) {
    let drawerRef;
    if (item) {
      drawerRef = this.drawerService.create<BookEditComponent, { request: Book }, any>({
        nzTitle: null,
        nzClosable: true,
        nzWidth: '70vw',
        nzPlacement: 'right',
        nzContent: BookEditComponent,
        nzContentParams: {
          request: item
        }
      });
    } else {
      drawerRef = this.drawerService.create<NewBookComponent>({
        nzTitle: null,
        nzClosable: true,
        nzWidth: '70vw',
        nzPlacement: 'right',
        nzContent: NewBookComponent
      });
    }

    drawerRef.afterClose.subscribe((data) => {
      if (data) {
        let params;
        if (data === 'onDelete') {
          params = null;
        } else {
          params = this.lastParams;
        }
        this.fetchLatest(params);
      }
    });
  }
}
