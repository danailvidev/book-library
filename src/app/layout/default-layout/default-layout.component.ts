import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
