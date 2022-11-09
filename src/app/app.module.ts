import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExchangeRateService } from './/services/exchangeRate.service'
import { HttpClientModule } from '@angular/common/http';
import { ConversionPanelComponent } from './conversion-panel/conversion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversionPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
