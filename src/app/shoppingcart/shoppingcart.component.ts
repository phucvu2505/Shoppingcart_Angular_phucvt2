import { ValidationService } from './../service/validation.service';
import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {
  init: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      img: 'https://via.placeholder.com/200x150',
      quantity: 0,
      price: 150000,
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      img: 'https://via.placeholder.com/200x150',
      quantity: 0,
      price: 320000,
    },
  ];

  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = Object.assign([], this.init);
  }

  removeProduct(id: string) {
    if (confirm('Bạn có muốn xoá sản phẩm ' + id + ' không?') == true) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          this.products.splice(i, 1);
        }
      }
    } else {
      return 0;
    }
  }

  refreshShoppingCart() {
    this.products = Object.assign([], this.init);
  }

  getSubTotalInShoppingcart() {
    let total: number = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].quantity < 0) return 0;
      else total += this.products[i].price * this.products[i].quantity;
    }
    return total;
  }

  getTotalProductInShoppingcart() {
    let total: number = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].quantity < 0) return 0;
      total += this.products[i].quantity;
    }
    return total;
  }
}
