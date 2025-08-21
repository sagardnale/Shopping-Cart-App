import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any[]=[];
  constructor() { }

  addToCart(product:any){
    this.cart.push(product);
  };
  getCart(){
    return this.cart;
  };
  getCartCount(){
    return this.cart.length;
  }
}
