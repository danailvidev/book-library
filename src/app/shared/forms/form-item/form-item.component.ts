import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ch-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {
  @Input() public label: string;
  @Input() public labelSuffix: TemplateRef<any>;
  @Input() public errorTip: string = null;
  @Input() public labelSpan: string;
  @Input() public controlSpan = '24';

  constructor() {}

  ngOnInit(): void {}
}
