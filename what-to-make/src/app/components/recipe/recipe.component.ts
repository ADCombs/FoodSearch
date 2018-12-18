import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeTest = {
    image:"https://www.edamam.com/web-img/94a/94aeb549b29ac92dced2ac55765f38f9",
    label:"Pizza Frizza recipes",
    url: "http://www.marthastewart.com/284463/pizza-frizza",
    dietLabels: [],
    ingredientLines: [
      "1 Basic Pizza Dough",
      "sugar",
      "oil"
    ],
    calories: 655.879392,
    totalTime: 20,
  }

  @Input() recipe;

  constructor() {}

  ngOnInit() {
  }

  onClick(link: string){
    window.open(link, "_blank");
  }

}
