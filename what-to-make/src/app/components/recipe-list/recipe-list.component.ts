import { Component, OnInit, Output } from '@angular/core';
import { FoodService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public foodService: FoodService) { }

  ngOnInit() {

  }

}
