import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public age = 15;

  constructor() {

  }
  public tangtuoi(){
    this.age++;
  }
  public giamtuoi(){
    this.age--;
  }
}
