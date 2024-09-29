import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
    headers?:
        | HttpHeaders
        | {
              [header: string]: string | string[];
          };
    observe?: 'body';
    context?: HttpContext;
    params?:
        | HttpParams
        | {
              [param: string]:
                  | string
                  | number
                  | boolean
                  | ReadonlyArray<string | number | boolean>;
          };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?:
        | {
              includeHeaders?: string[];
          }
        | boolean;
}

export interface Products {
    items: Product[];
    total: number;
    pages: number;
    perPage: number;
    otalPages: number;
}

export interface Product {
    price: string;
    name: string;
    image: string;
    rating: number;
}

export interface PagginationParams {
    [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}