import { Component,OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class ProductList implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

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
    console.log('In performFilter', filterBy, this.products);
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }


  // tslint:disable-next-line:member-ordering
   products: IProduct[];

   constructor(private _productService: ProductService) {

    }

  ngOnInit(): void {
    console.log('In ngOnInit');
    this._productService.getProducts()
      .subscribe(
        products => {
           this.products = products;
           this.filteredProducts = this.products;
          },
        error => this.errorMessage = <any>error);

  }
}
