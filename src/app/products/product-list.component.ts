import { Component } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class ProductList {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  filteredProducts: IProduct[];
  _filterValue: string;
  get filterValue(): string {
    return this._filterValue;
  }
  set filterValue (value: string) {
    this._filterValue = value;
    this.filteredProducts = this._filterValue ? this.performFilter(this.filterValue) : this.products;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  // tslint:disable-next-line:member-ordering
  products: IProduct[] = [
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  },
  {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
  }
  ];

  /**
   *
   */
  constructor() {
    this.filteredProducts = this.products;
    this.filterValue = 'cart';
  }
}
