import { Security } from './../utils/security.util';
import { Product } from './../models/product.model';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private url = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Autorization', 'bearer ' + token);
        return headers;
    }

    getPoducts() {
        return this.http.get<Product[]>(this.url + '/products');
    }

    authenticate(data) {
        return this.http.post(this.url + '/accounts/authenticate', data);
    }

    refreshToken() {
        return this.http.post(this.url + '/accounts/refresh-token', null, { headers: this.composeHeaders() });
    }

    create(data) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }
}