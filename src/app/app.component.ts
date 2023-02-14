import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Application';
  loading = false;
  products$: Observable<IProduct[]>;
  
  constructor(private productsService: ProductService) {

  }
  
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll(5).pipe(
      tap(() => this.loading = false)
    );
  }
}
