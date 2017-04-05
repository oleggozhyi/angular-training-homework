import { isEmpty } from 'rxjs/operator/isEmpty';
import { Product } from '../product-service/product';
import { Observable } from 'rxjs/Rx';
import { BasketService } from '../basket-service/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private productsInBasket: Product[];
  get isEmpty(): boolean {
    return this.productsInBasket.length === 0;
  }
  get amount(): number {
    return this.productsInBasket
               .reduce((acc, product) => acc + product.price, 0);
  }

  constructor(private _basketService: BasketService) {
  }

  ngOnInit() {
    this._basketService
        .productsInBasket
        .subscribe(products => this.productsInBasket = products);
  }
  
}
