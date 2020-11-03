import { Product } from './../shoppingcart/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.css'],
})
export class SumaryComponent implements OnInit {
  @Input()
  public products: Product[];
  constructor() {}
  ngOnInit(): void {}

  getSubTotalInShoppingcart() {
    let total: number = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price * this.products[i].quantity;
    }
    return total;
  }
}
