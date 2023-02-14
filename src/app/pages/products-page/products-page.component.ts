import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  title = 'Products';
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
