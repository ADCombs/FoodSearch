import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.scss'],
  animations: [
    trigger('expandableState', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('200ms', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('200ms', style({ height: '0', opacity: 0 })),
      ]),
    ]),    
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class MainOverviewComponent implements OnInit {

  displaySearchContainer: boolean = false;
  foodItem: string;
  foodSearchHint: string = "";
  isLoading = false;
  hasError = false;

  constructor(public foodSerivce: FoodService,
              public snackBar: MatSnackBar) { }
  
  ngOnInit() {  
    this.foodSerivce.itemDoesNotExist.subscribe(this.errorOnForm.bind(this));  
  }

  onSearch(){
    this.foodSearchHint = 'Loading...';
    this.isLoading = true;
    this.foodSerivce.foodRequest(this.foodItem);
    this.foodSerivce.request.subscribe(() => this.isLoading = false);
  }

  errorOnForm(){
    this.isLoading = false;
    this.hasError = true;
    this.snackBar.open('Item does not exist', null, {duration: 2000});
  }

}
