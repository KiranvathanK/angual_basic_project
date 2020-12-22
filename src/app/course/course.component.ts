import { courseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template:`<h2>{{title}}</h2>
  
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>
  <div (click)="ondiv()">
  <button (click)="OnSave($event)">submit</button>
  </div>
  <input [(ngModel)]="email" (keyup.enter)="onkeyup()"/>

{{course.title|uppercase|lowercase}}<br/>
{{course.rating|number:'2.1-1'}}<br/>
{{course.student|number}}<br/>
{{course.price|currency:'INR':true:'3.2-2'}}<br>
{{course.date|date:'mediumDate'}}<br>
{{text|summary:90}}







  
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title="list of corses";
courses;
email="k@mail.com";
text="Download the perfect picture pictures. Find over 100+ of the best free picture images. Free for commercial use ✓ No attribution required ✓ Copyright-free.";

onkeyup(){
console.log(this.email);
}

ondiv(){
  console.log("div was clicked");
}
OnSave($event){
  $event.stopPropagation();
  console.log("button was clicked",$event)
}

course ={
  title:"course",
  rating:4.694,
  student:2344,
  price:2344,
  date:new Date(2019,12,2)
}





  constructor( service:courseService) {
    
this.courses=service.getCourses();
   }

  ngOnInit(): void {
  }

}

