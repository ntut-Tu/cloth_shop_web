// // product-management.component.ts
// import { Component, OnInit } from '@angular/core';
// import {Product} from "../../../model/product";
// import {ProductService} from "../../../service/product.service";
//
// @Component({
//   selector: 'app-product-management',
//   templateUrl: './product-management.component.html',
//   styleUrls: ['./product-management.component.css']
// })
// export class ProductManagementComponent implements OnInit {
//   vendorProducts: Product[] = [];
//
//   constructor(private productsService: ProductService) {}
//
//   ngOnInit(): void {
//     this.productsService.getProducts().subscribe((products) => {
//       this.vendorProducts = products;
//     });
//   }
// }
