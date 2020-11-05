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
  constructor() {}
  ngOnInit(): void {}
}
