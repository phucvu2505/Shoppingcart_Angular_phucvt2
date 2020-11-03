import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      img: 'https://via.placeholder.com/200x150',
      quantity: 0,
      price: 150000
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      img: 'https://via.placeholder.com/200x150',
      quantity: 0,
      price: 320000
    }
  ]

  removeProduct(id: string) {
   if(confirm('Bạn có muốn xoá sản phẩm ' + id + ' không?') ==  true){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
   }else{
     return 0;
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
