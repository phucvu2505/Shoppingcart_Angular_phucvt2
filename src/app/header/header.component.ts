import { Product } from './../shoppingcart/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

  getTotalProductInShoppingcart(){
    let total: number = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].quantity;
    }
    return total;
  }

}
