import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { LibraryService } from '@shared/library/library.service';

import { ENVIRONMENT } from '@shared/shared';
import { Book } from '@shared/library';
import { AbstractListComponent } from '@shared/abstract/abstract-list.component';

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

  constructor(@Inject(ENVIRONMENT) env: any, public svc: LibraryService) {
    super(env, svc);
  }

  ngOnInit(): void {
    this.fetchLatest(this.lastParams);
    super.ngOnInit();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
