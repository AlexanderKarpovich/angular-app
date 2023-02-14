import { Component } from '@angular/core';
import { fetchProducts } from './data/fetchProducts';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Application';

  products: IProduct[] = fetchProducts();
}
