import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product.model';
import { CartService } from 'src/app/carts/services/cart.service';
import { ItemCart } from 'src/app/carts/cart.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products!:Product[];
  catigories!:string[];
  isfetch!:boolean;
  constructor(private product:ProductsService ,private CartService:CartService) {

  }

  ngOnInit():void {
    this.getAllProduct();
    this.getCatigories();
  }

  getAllProduct() {
    this.isfetch = true
    this.product.GetAllproducts().subscribe(
      (data:any) =>{
        this.isfetch = false;
        this.products = data;
      }
    )
  }

  getCatigories() {
    this.product.GetCategory().subscribe(
      (data:any)=> {
        this.catigories = ['All',...data];
      }
    )
  }

  filterProduct(selectValue:string) {
    this.isfetch = true
    this.product.GetproductsByCategory(selectValue).subscribe(
      (data:any) => {
        console.log(data);

        this.isfetch = false;
        this.products = data;
      }
    )
  }

  add(id:number,title:string,price:number,img:string) {
    this.CartService.addToCart(new ItemCart (id,img,title,price,1));
    let audio = new Audio();
    audio.src='../../../../assets/sound/Add.mp3';
    audio.play();
  }
}
