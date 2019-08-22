import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatString } from '@shared/operators/string-operators';

@Injectable()
export class ProductService {
  private getProductsUrl = `${environment.apiBaseUrl}/products`;
  private getProductByIdUrl = `${environment.apiBaseUrl}/product/{0}`;
  private getNewArrivalsUrl = `${environment.apiBaseUrl}/product/newarrivals`;

  constructor(private http: HttpClient) { }

  getProducts(page = 0, query): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    if (query) {
      params = params.set('q', query);
    }

    return this.http.get(this.getProductsUrl, { params: params });
  }

  getProductById(id: any): Observable<any> {
    const url = formatString(this.getProductByIdUrl, id);
    return this.http.get(url);
  }

  getNewArrivals(): Observable<any> {
    return this.http.get(this.getNewArrivalsUrl);
  }
}
