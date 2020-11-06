import { Product } from './../shoppingcart/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.css'],
})
export class SumaryComponent implements OnInit {
  @Input()
  public subTotal: number = 0;

  promoCode: string = '';
  promoValue: number = 0;
  promoCodes = [
    { code: 'SALE15', value: 15 },
    { code: '20-11', value: 20 },
  ];

  constructor() {}
  ngOnInit(): void {}

  getDiscount() {
    let discount = 0;
    for (let item of this.promoCodes) {
      if (this.promoCode == item.code) {
        this.promoValue = item.value;
        discount = (this.subTotal * item.value) / 100;
        break;
      } else {
        this.promoValue = 0;
        discount = 0;
      }
    }

    if (this.promoValue == 0) {
      alert('Sai mã khuyến mại. Yêu cầu nhập lại mã khuyến mại');
    }
    return discount;
  }

  getTax() {
    let tax = 0;
    tax = (this.subTotal * 10) / 100;
    return tax;
  }

  getTotalPrice() {
    let total = 0;
    if (this.promoValue != 0) {
      for (let item of this.promoCodes) {
        if (this.promoCode === item.code) {
          total = this.subTotal + this.getTax() - this.getDiscount();
        }
      }
    } else {
      total = this.subTotal + this.getTax();
    }
    return total;
  }
}
