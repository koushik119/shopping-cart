import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpUrl: string = `http://localhost:12345`;

  constructor(private http : HttpClient) { }

  getProduct(){
    //return this.http.get("https://fakestoreapi.com/products");
    return this.http.get("http://localhost:12345/products")
  }

  getAllProducts = () => {
    console.log('getAllProducts');
    return this.http.get(`${this.httpUrl}/products`);
  };

  getProductById = (pid: number) => {
    console.log('getAllProducts');
    return this.http.get(`${this.httpUrl}/products/${pid}`);
  };

  getProductByName(pName: string) {
    return this.http.get(`${this.httpUrl}/products?productName=${pName}`)
  }
}
