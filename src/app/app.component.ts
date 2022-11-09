import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/types/Currency';
import { ExchangeRateService } from './services/exchangeRate.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header
    *ngIf="exchangeRateFromServer.length > 0"
    [exchangeRateFromServer] = "exchangeRateFromServer"
    ></app-header>
    <app-conversion-panel
    *ngIf="exchangeRateFromServer.length > 0"
    [exchangeRateFromServer] = "exchangeRateFromServer"
    ></app-conversion-panel>
  `, 
  styles: []
})
export class AppComponent implements OnInit {
  exchangeRateFromServer: Currency[] = [];

  constructor(
    private _exchangeRateService: ExchangeRateService,
  ) {}

  ngOnInit() {
    this._exchangeRateService
      .getExchangeRate()
      .subscribe(data => 
        this.exchangeRateFromServer = data
        .filter(curr => (curr.cc === "EUR" || curr.cc === "USD"))
      )
  }
}
