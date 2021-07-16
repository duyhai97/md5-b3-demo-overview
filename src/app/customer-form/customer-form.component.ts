import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Customer";
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  jobList = ['Software Developer', 'Tester', 'Project Manager', 'Business Analyst'];
  // customer1 = new Customer(1, 'Duy Hai', 24, this.jobList[1]);
  // customer2 = new Customer(2, 'Duy phuc', 22, this.jobList[2]);
  public name = "Hai"
  public age ;

  constructor(private common: CommonService) {
    this.age = common.age;
  }

  public tangtuoi(){
    this.common.age++
    this.age = this.common.age

  }
  public giamtuoi(){
    this.common.age--
    this.age = this.common.age;
  }
  // public themvaomang(){
  //   this.jobList.push(this.customer1.name + ':' + this.customer1.age + 'tuoi')
  // }


  ngOnInit(): void {
  }

}
