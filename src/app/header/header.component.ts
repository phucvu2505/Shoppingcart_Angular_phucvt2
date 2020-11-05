import { Product } from './../shoppingcart/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public totalProductInShoppingCart: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
