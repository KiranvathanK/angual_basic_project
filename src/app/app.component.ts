import { FavoritechangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title:"title",
    isFavorite:true

  }
viewMode='map';

courses;

onAdd(){
  this.courses.push({id:4,name:'course4'})
}

onChange(course){
 course.name='uptodate';

}
 onLoad(){
this.courses =[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'},];

 }
trackcourse(index,course){
  return course ? course.id:undefined;
}

canSave=true;


 task={
   title:'review',
   asign:null

 }



}











