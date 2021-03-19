import { Component, OnInit } from '@angular/core';
import { IProductsData } from './Models/IProductsData';
import { ECommerceDataService } from './Services/e-commerce.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  productsData: IProductsData[] = [];
  constructor(private eCommerceDataService: ECommerceDataService) { }

  ngOnInit(): void {
    this.eCommerceDataService.getData().subscribe((data: any) => {
      this.productsData = data;

    });
  }
}
