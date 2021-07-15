import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Customer";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  jobList = ['Software Developer', 'Tester', 'Project Manager', 'Business Analyst'];
  customer1 = new Customer(1, 'Duy Hai', 24, this.jobList[1]);
  customer2 = new Customer(2, 'Duy phuc', 22, this.jobList[2]);

  constructor() { }

  public tangtuoi(){
    this.customer1.age++;
  }
  public giamtuoi(){
    this.customer1.age--;
  }


  ngOnInit(): void {
  }

}
