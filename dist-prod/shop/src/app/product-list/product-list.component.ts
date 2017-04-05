import { BasketService } from '../basket-service/basket.service';
import { ProductCategory } from '../product-service/product-category.enum';
import { Product } from '../product-service/product';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../product-service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private _productService: ProductService,
    private _basketService: BasketService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }
  addToBasket(product: Product) {
    this._basketService.addToBasket(product);
  }
}
