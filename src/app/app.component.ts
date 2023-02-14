import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Application';
  loading = false;
  products$: Observable<IProduct[]>;

  query: string = '';
  
  constructor(
    public productsService: ProductService,
    public modalService: ModalService) {

  }
  
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll(5).subscribe(() => {
      this.loading = false
    });
  }
}
