import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./pizza-summary.component.scss']
})
export class PizzaSummaryComponent {
  @Input()
  parent: FormGroup;

  @Input()
  total: string;

  @Input()
  prices: any;
}
