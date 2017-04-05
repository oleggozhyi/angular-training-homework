import { Product } from '../product-service/product';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class BasketService {
  private _productsInBasket: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  constructor() { }

  get productsInBasket() : Observable<Product[]> {
     return this._productsInBasket.asObservable();
  }
  
  addToBasket(product: Product): void {
    let currentList = this._productsInBasket.getValue();
    currentList.push(product);
     this._productsInBasket.next(currentList);
  }
}
