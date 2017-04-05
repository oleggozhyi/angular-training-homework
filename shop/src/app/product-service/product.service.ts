import { ProductCategory } from './product-category.enum';
import { Product } from './product';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private _allProducts: Product[] = [
    {
      name: "Samsung Galaxy S8",
      description: "Cool new flagship phone from Samsung",
      category: ProductCategory.Phones,
      price: 1000,
      isAvailable: false
    },
    {
      name: "Samsung Galaxy S7 Edge",
      description: "Old good flagship phone from Samsung",
      category: ProductCategory.Phones,
      price: 700,
      isAvailable: true
    },
    {
      name: "Apple iPhone 7",
      description: "Coolest iphone ever",
      category: ProductCategory.Phones,
      price: 900,
      isAvailable: true
    },
    {
      name: "Apple iPad Air 2",
      description: "Coolest ipad ever",
      category: ProductCategory.Tablets,
      price: 500,
      isAvailable: true
    },
    {
      name: "Microsoft Surface Pro 4",
      description: "Just an awesome tablet",
      category: ProductCategory.Tablets,
      price: 1300,
      isAvailable: true
    }  
  ];

  getProducts(): Observable<Product[]> {
     return  Observable.of(this._allProducts);
  }
}
