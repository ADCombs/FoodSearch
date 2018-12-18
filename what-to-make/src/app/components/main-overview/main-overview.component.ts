import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.scss'],
  animations: [
    trigger('expandableState', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('500ms', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('500ms', style({ height: '0', opacity: 0 })),
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

  constructor(private food: FoodService) { }
  
  ngOnInit() {
    
  }

  testFunction(){
  }

}
