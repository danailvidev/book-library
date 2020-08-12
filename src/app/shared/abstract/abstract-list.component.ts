import { Inject, OnDestroy, OnInit, Directive } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { finalize, retry, take, tap } from 'rxjs/operators';

import { ENVIRONMENT } from '@shared/shared';

@Directive()
export abstract class AbstractListComponent<T> implements OnInit, OnDestroy {
  public currentItems: Array<T>;
  public subscription: Subscription = new Subscription();
  public loading: boolean = true;
  public count: number;
  public startAt: number = 0;
  public totalCount: number;
  public pageIndex: number = 1;
  public pageSizeOptions;
  public lastParams: HttpParams;
  public mapOfSort: { [key: string]: string | null };

  constructor(@Inject(ENVIRONMENT) private env: any, public svc: any) {
    this.pageSizeOptions = this.env.pagination.defaultPagination.resultsPerPageOptions || [
      10,
      30,
      50
    ];
    this.count = this.env.pagination.defaultPagination.defaultResultsPerPage || 10;
  }

  public ngOnInit() {}

  public ngOnDestroy(): void {
    delete this.currentItems;
    this.subscription.unsubscribe();
  }

  public fetchLatest(params: HttpParams) {
    this.lastParams = params;
    if (params && !params.has('_sort')) {
      this.mapOfSort = {};
    }

    this.loading = true;
    this.subscription.add(
      this.svc
        .fetchLatest(params)
        .pipe(
          finalize(() => (this.loading = false)),
          take(1),
          retry(1),
          tap((res: any) => {
            if (res && res.body) {
              this.currentItems = res.body;
            }
            this.totalCount = res.headers.get('X-Total-Count') || 50;
          })
        )
        .subscribe()
    );
  }

  public pageIndexChange(event) {
    this.pageIndex = event;
    this.startAt = this.pageIndex;

    let params: HttpParams = new HttpParams();
    if (this.lastParams && this.lastParams.has('q')) {
      params = params.append('q', this.lastParams.get('q'));
    }
    params = params.append('_page', this.startAt.toString());
    params = params.append('_limit', this.count.toString());
    this.fetchLatest(params);
  }

  public pageSizeChange(event) {
    this.count = event;
    const totalPageCount = Math.ceil(this.totalCount / this.count);
    this.pageIndex = this.totalCount > 0 ? Math.ceil(totalPageCount / this.count) : 1;

    let params: HttpParams = new HttpParams();
    if (this.lastParams && this.lastParams.has('q')) {
      params = params.append('q', this.lastParams.get('q'));
    }
    params = params.append('_page', this.startAt.toString());
    params = params.append('_limit', this.count.toString());
    this.fetchLatest(params);
  }

  public sort(event) {
    const paramName = '_sort';
    if (event) {
      let params: HttpParams = this.lastParams ? this.lastParams : new HttpParams();
      if (params.has(paramName)) {
        params = params.set(paramName, event.key);
        params = params.set('_order', event.value === 'descend' ? 'desc' : 'asc');
      } else {
        params = params.append(paramName, event.key);
        params = params.append('_order', event.value === 'descend' ? 'desc' : 'asc');
      }

      this.fetchLatest(params);
    }
  }

  public search(searchText: string = '') {
    const paramName = 'q';
    let params: HttpParams = this.lastParams ? this.lastParams : new HttpParams();

    if (searchText) {
      if (params.has(paramName)) {
        params = params.set(paramName, searchText);
      } else {
        params = params.append(paramName, searchText);
      }
      if (!params.has('_page') && !params.has('_limit')) {
        params = params.append('_page', this.startAt.toString());
        params = params.append('_limit', this.count.toString());
      }

      this.fetchLatest(params);
    } else {
      if (params && params.has(paramName)) {
        params = params.delete(paramName);
      }
      if (!params.has('_page') && !params.has('_limit')) {
        params = params.append('_page', this.startAt.toString());
        params = params.append('_limit', this.count.toString());
      }
      this.fetchLatest(params);
    }
  }
}
