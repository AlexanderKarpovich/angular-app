import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './../../services/products.service';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productForm = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    price: new FormControl<number>(100, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    category: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    rate: new FormControl<number>(5, [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ]),
    count: new FormControl<number>(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000)
    ])
  });
  
  constructor(
    private productService: ProductService,
    private modalService: ModalService) {

  }

  get title() {
    return this.productForm.controls.title as FormControl<string>;
  }

  get price() {
    return this.productForm.controls.price as FormControl<number>;
  }

  get description() {
    return this.productForm.controls.description as FormControl<string>;
  }

  get category() {
    return this.productForm.controls.category as FormControl<string>;
  }

  get rate() {
    return this.productForm.controls.rate as FormControl<number>;
  }

  get count() {
    return this.productForm.controls.count as FormControl<number>;
  }

  submit() {
    if (!this.productForm.invalid) {
      this.productService.post({
        id: 0,
        title: this.productForm.value.title as string,
        price: this.productForm.value.price as number,
        description: this.productForm.value.description as string,
        category: this.productForm.value.category as string,
        image: 'https://i.pravatar.cc',
        rating: {
          rate: this.productForm.value.rate as number,
          count: this.productForm.value.count as number
        }
      }).subscribe(() => this.modalService.close())
    }
  }
}
