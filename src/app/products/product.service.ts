import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
  private _productUrl = './../assets/api/products/products.json';
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log('All :', data))
      .catch(this.errHandler);

  }

  private errHandler(err: HttpErrorResponse)
  {
    console.log(err.message);
    return Observable.throw(err.message);
  }


  constructor(private _http: HttpClient) {
  }
}


// getProducts(): IProduct[] {
  //   return [
  //     {
  //       'productId': 2,
  //       'productName': 'Garden Cart',
  //       'productCode': 'GDN-0023',
  //       'releaseDate': 'March 18, 2016',
  //       'description': '15 gallon capacity rolling garden cart',
  //       'price': 32.99,
  //       'starRating': 4.2,
  //       'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  //   },
  //   {
  //       'productId': 5,
  //       'productName': 'Hammer',
  //       'productCode': 'TBX-0048',
  //       'releaseDate': 'May 21, 2016',
  //       'description': 'Curved claw steel hammer',
  //       'price': 8.9,
  //       'starRating': 4.8,
  //       'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
  //   }
  //   ];
  // }

  /**
   *
   */