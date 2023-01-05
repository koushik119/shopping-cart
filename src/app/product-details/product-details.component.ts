import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  pId: number;
  product: any;
  allProds: any = [];

  constructor(private productService: ApiService,private cartService: CartService, private route: ActivatedRoute) {
    this.pId = 0;
    this.product = {}
  }

  ngOnInit() {
    this.product = {}

    this.route.params.subscribe(params => {
      this.pId = params['id'];
      this.productService.getProductById(this.pId)
        .subscribe(prod => this.product = prod.valueOf());
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
