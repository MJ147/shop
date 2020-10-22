import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Product } from '../services';
import { MediaObserver } from '@angular/flex-layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  readonly products$: Observable<Product[]>;

  readonly breakpointsToColumnNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private _media: MediaObserver,
              private _productService: ProductService) {
    this.products$ = this._productService.allProducts;
    this.columns$ = this._media.asObservable().pipe(map(m => this.breakpointsToColumnNumber.get(m[0].mqAlias ) as number
    );
  }
}
