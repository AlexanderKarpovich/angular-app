import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Application';
  products: IProduct[] = [];
  loading = false;
  
  constructor(private productsService: ProductService) {

  }
  
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll(5).subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }
}
