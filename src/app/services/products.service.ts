import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError, tap } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products: IProduct[] = [];

    constructor(
        private http: HttpClient,
        private errorService: ErrorService) { }


    post(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(
            tap(product => this.products.push(product))
        );
    }

    getAll(count: number = 0): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: { limit: count }
            })
        }).pipe(
            retry(5),
            tap(products => this.products = products),
            catchError(this.errorHandler)
        );
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message);
    }
}