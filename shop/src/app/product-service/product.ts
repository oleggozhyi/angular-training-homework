import { ProductCategory } from './product-category.enum';

export class Product {
    constructor(readonly name: string,
                readonly description: string,
                readonly category: ProductCategory,
                readonly price: number,
                readonly isAvailable: boolean) {
    }

    get categoryName(): string {
        return ProductCategory[this.category];
    }
}
