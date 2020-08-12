import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  title: string;
  open?: boolean;
  icon?: any;
  disable?: boolean;
  selected?: boolean;
  routerLink?: string | string[];
  children?: any;
}

@Component({
  selector: 'ch-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public model: MenuItem[];
  public openMap: { [name: string]: boolean } = {
    Library: true
  };

  @Input() public mode = 'vertical';
  @Input() public isCollapsed = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.model = [
      {
        title: 'Library',
        icon: 'home',
        routerLink: '/'
      }
    ];
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
