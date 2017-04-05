import { ProductCategory } from './product-category.enum';
import { Product } from './product';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private _allProducts = [
    new Product("Samsung Galaxy S8", "Cool new flagship phone from Samsung", ProductCategory.Phones, 700, false),
    new Product("Samsung Galaxy S7 Edge", "Old good flagship phone from Samsung", ProductCategory.Phones, 1000, true),
    new Product("Apple iPhone 7", "Coolest iphone ever", ProductCategory.Phones, 1000, true),
    new Product("Apple iPad Air 2", "Coolest ipad ever", ProductCategory.Tablets, 800, true),
    new Product("Microsoft Surface Pro 4", "Just an awesome tablet", ProductCategory.Tablets, 1200, true)
  ];

  getProducts(): Observable<Product[]> {
     return  Observable.of(this._allProducts);
  }
}
