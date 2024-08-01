import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  currentCategoryId!: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })

  }

  listProducts() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    console.log('Has Category ID:', hasCategoryId);  // Debugging

    if (hasCategoryId) {
      const idParam = this.route.snapshot.paramMap.get('id');
      this.currentCategoryId = idParam !== null ? +idParam : 0;
      console.log('Current Category ID:', this.currentCategoryId);  // Debugging

    }
    else{
      // not available, use default category
      this.currentCategoryId = 1;
      console.log('Default Category ID:', this.currentCategoryId);  // Debugging

    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  };
}
