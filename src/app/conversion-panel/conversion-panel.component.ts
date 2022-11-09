import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/types/Currency';

@Component({
  selector: 'app-conversion-panel',
  templateUrl: './conversion-panel.component.html',
  styleUrls: ['./conversion-panel.component.css']
})
export class ConversionPanelComponent implements OnInit {
  @Input()
  exchangeRateFromServer: Currency[] = [];

  euro: Currency | undefined;
  exchangeRate: Currency[] = [];
  
  firstInputValue = '';
  secondInputValue = '';

  firstSelectValue = 'UAH';
  secondSelectValue = 'EUR';

  ngOnInit() {
    this.euro = this.exchangeRateFromServer.find(item => item.cc === "EUR");
    this.exchangeRate = [
      {
        cc: "UAH",
        rate: "1",
      },
      ...this.exchangeRateFromServer
    ]

    if(this.euro) {
      this.secondInputValue = '1';
      this.firstInputValue = this.formateDate(+this.secondInputValue * +this.euro.rate);
    }
  }

  handleChangeInput = (event, param) => {
    switch(param) {
      case 'firstSelect':
        this.firstInputValue = event.target.value;
        this.switchSelect('secondSelect');
        break;
      case 'secondSelect':
        this.secondInputValue = event.target.value;
        this.switchSelect('firstSelect');
        break;
      default:
        break;
    }
  }

  handleChangeSelect = (event, param) => {
    switch(param) {
      case 'firstSelect':
        this.firstSelectValue = event.target.value;
        break;
      case 'secondSelect':
        this.secondSelectValue = event.target.value;
        break;
      default:
        break;
    }

    this.switchSelect(param);
  }

  noUAH = this.firstInputValue !== 'UAH' && this.secondInputValue !== 'UAH';
  
  formateDate = (param: number) => {
    return param.toFixed(2).toString();
  }

  switchSelect = (param: string) => {
    let curr1 = this.exchangeRate.find(item => item.cc === this.firstSelectValue)
    let curr2 = this.exchangeRate.find(item => item.cc === this.secondSelectValue)

    if (param === 'firstSelect') {
      if (this.noUAH) {
        this.firstInputValue = this.formateDate(+this.secondInputValue * +curr2.rate / +curr1.rate);
        return;
      } 
      
      this.firstInputValue = this.formateDate(+this.secondInputValue * +curr2.rate);
      return;
    }

    if (param === 'secondSelect') {
      if (this.noUAH) {
        this.secondInputValue = this.formateDate(+this.firstInputValue * +curr1.rate / +curr2.rate);
        return;
      } 
      
      this.secondInputValue = this.formateDate(+this.firstInputValue * +curr2.rate);
      return;
    }
  }
}
