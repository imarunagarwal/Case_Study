import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProductsData } from './Models/IProductsData';
import { ECommerceDataService } from './Services/e-commerce.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
})
export class ECommerceComponent implements OnInit, OnDestroy {
  productsData: IProductsData[] = [];
  getStudentDataSubscription: Subscription;
  constructor(private eCommerceDataService: ECommerceDataService) {}

  ngOnInit(): void {
    this.getStudentDataSubscription = this.eCommerceDataService
      .getData()
      .subscribe((data: any) => {
        this.productsData = data;
      });
  }

  ngOnDestroy(): void {
    this.getStudentDataSubscription.unsubscribe();
  }
}
