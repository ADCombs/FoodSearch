import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  request = new Subject<{}>();
  itemDoesNotExist = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  foodRequest(foodType: string){
    var body = {
      "item" : foodType
    }
    this.http.post('/api/post/recipeSearch.php', body).subscribe((response) => {
      this.request.next(response);
    }, error => {
      this.itemDoesNotExist.emit(true);
    })
  }
}
