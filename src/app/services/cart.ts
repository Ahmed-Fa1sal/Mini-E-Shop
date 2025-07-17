import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  getCart(){
    return this.cart;
  }
  
  addToCart(product: any){
    this.cart.push(product);
  }

  removeFromCart(productToRemove: any){
    this.cart = this.cart.filter(item => item !== productToRemove);

  }
}
