import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { DivComponent } from './div/div.component';
declare var $: any;

@Component({
  selector: 'app-dynamic-div-onscroll',
  templateUrl: './dynamic-div-onscroll.component.html',
  styleUrls: ['./dynamic-div-onscroll.component.css']
})
export class DynamicDivOnscrollComponent implements AfterViewInit {

  constructor(private CFR: ComponentFactoryResolver) {
  }

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;


  @HostListener("window:scroll", ["$event"])
  onScroll() {
    if ($(window).scrollTop() >= $('#scrollDiv').offset().top + $('#scrollDiv').outerHeight() - window.innerHeight) {
      this.createComponent();
    }
  }

  index: number = 0;

  componentsReferences = [];


  ngAfterViewInit(): void {
    this.createComponent();
    this.createComponent();
    this.createComponent();
    this.createComponent();
  }

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(DivComponent);
    let componentRef: ComponentRef<DivComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.index = ++this.index;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }
}
