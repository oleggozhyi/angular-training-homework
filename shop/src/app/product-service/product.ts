import { ProductCategory } from './product-category.enum';

export class Product {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly category: ProductCategory;
    readonly isAvailable: boolean;
}
