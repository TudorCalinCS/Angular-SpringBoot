import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  
  product: Product = new Product();

  constructor(private productService: ProductService,
     private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.handleProductDetails();
    })
  }
  handleProductDetails() {

    const id = this.route.snapshot.paramMap.get('id');
    const theProductId: number = id !== null ? +id : 0;

    this.productService.getProduct(theProductId).subscribe(
      data=>{
        this.product=data;
      }
    )
  }

}
