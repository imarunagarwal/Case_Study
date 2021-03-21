import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProductsData } from '../Models/IProductsData';
import { ECommerceDataService } from '../Services/e-commerce.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  productsData: IProductsData[] = [];
  getProductsDataSubscription: Subscription;
  constructor(private eCommerceDataService: ECommerceDataService) {}

  ngOnInit(): void {
    this.getProductsDataSubscription = this.eCommerceDataService
      .getData()
      .subscribe((products: IProductsData[]) => {
        this.productsData = products;
      });
  }

  ngOnDestroy(): void {
    this.getProductsDataSubscription.unsubscribe();
  }
}
