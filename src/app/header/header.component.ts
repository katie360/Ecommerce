import { Component ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartProducts :any[]=[];
  
  constructor(private productService:ProductService){
    this.productService.cartAddedSubject.subscribe(res =>{
    this.loadCart();
    })
  }
ngOnInit():void{
  this.loadCart();
}

  loadCart(){
    this.productService.getCartItemsByCustId(1).subscribe((res :any)=>{
    this.cartProducts = res.data;
    console.log(this.cartProducts);
    })
  }
}   
