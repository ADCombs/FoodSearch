import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food-service.service';
import { Observable } from 'rxjs';

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
