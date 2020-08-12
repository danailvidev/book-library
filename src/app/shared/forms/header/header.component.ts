import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public pageTitle: string;
  @Input() public subtitle: string;
  @Input() public backIcon: string = 'arrow-left';
  @Input() public tag: string;

  @Output() public back: EventEmitter<any> = new EventEmitter();

  constructor(private location: Location) {}

  ngOnInit(): void {}

  public onBackClick() {
    this.back.emit(true);
  }
}
