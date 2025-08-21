import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products = [
    { id: 1, name: 'Nike Shoes', price: 120, img: 'https://picsum.photos/200/150?random=1' },
    { id: 2, name: 'Adidas Sneakers', price: 100, img: 'https://picsum.photos/200/150?random=2' },
    { id: 3, name: 'Puma Running', price: 90, img: 'https://picsum.photos/200/150?random=3' },
    { id: 4, name: 'Reebok Classic', price: 110, img: 'https://picsum.photos/200/150?random=4' }
  ];
  constructor(public readonly cartService:CartService){

  }

  add( product:any){
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
