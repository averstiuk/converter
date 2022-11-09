import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CurrencyApi } from "src/app/types/CurrencyApi";

@Injectable()
export class ExchangeRateService {

  private _url: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(
    private httpClient: HttpClient,
  ) {}

  getExchangeRate() {
    return this.httpClient.get<CurrencyApi[]>(this._url);
  }
}