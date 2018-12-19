import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  request: Observable<{}>;

  constructor(private http: HttpClient) { }

  foodRequest(foodType: string){
    var body = {
      "item" : foodType
    }
    this.request = this.http.post('/api/post/recipeSearch.php', body);
  }
}
