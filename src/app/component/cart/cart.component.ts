import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:any[]=[];

  constructor(private readonly cartService: CartService){
    this.cartItems = this.cartService.getCart();
  }

  getTotal(){
    return this.cartItems.reduce((sum,item)=> sum + item.price,0);
  }

}
