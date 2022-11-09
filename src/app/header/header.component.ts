import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Currency } from 'src/app/types/Currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input()
  exchangeRateFromServer: Currency[] = [];
}
