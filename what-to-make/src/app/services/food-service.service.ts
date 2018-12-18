import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  foodRequest(foodType: string){
    this.http.post('http://localhost/example.test/api/post/store.php', foodType).subscribe((value) => {
      debugger
      console.log(value)
    });
  }
}
