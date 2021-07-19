import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name = '';
  public password = '';
  jobList = ['Software Developer', 'Tester', 'Project Manager', 'Business Analyst'];
  public job = '';


  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log("onsubmit()");
    console.log(this.name);
    console.log(this.password);
    console.log(this.job);
  }

  selectJob(event:any ){
    // console.log('job = :'+ this.job, event.target.value);
    this.job = event.target.value
  }

}
