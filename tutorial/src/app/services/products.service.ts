import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PagginationParams, Products, Product } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private apiService: ApiService) {}

    getProducts = (
        url: string,
        params: PagginationParams
    ): Observable<Products> => {
        return this.apiService.get(url, {
            params,
            responseType: 'json',
        });
    };

    addProducts = (url: string, body: Product): Observable<Product> => {
        return this.apiService.post(url, body, {});
    };

    editProducts = (url: string, body: Product): Observable<Product> => {
        return this.apiService.put(url, body, {});
    };
    deleteProducts = (url: string): Observable<Product> => {
        return this.apiService.delete(url, {});
    };
}
