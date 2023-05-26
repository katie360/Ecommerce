import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cartAddedSubject = new Subject<boolean>();
  productList :any [] =[];

  cartObj:any = {
    "CartId": 0,
    "CustId": 0,
    "ProductId": 1,
    "Quantity": 0,
    "AddedDate": "2023-05-26T05:16:47.572Z"
  }

  constructor( private productService: ProductService){

  }
ngOnInit():void{
  debugger;
  this.loadAllProducts();
}

  loadAllProducts(){
    debugger;
  this.productService.getAllProducts().subscribe((result:any)=>{
   this.productList = result.data;
})

}
    addItemToCart(ProductId:number){
      debugger;
      this.cartObj.ProductId =ProductId;
      this.productService.addToCart(this.cartObj).subscribe((result:any)=>{
       if (result.result){
         alert('Product added successfully');
       }
     })
    }
}
