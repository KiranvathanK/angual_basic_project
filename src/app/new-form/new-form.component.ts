import { Component} from '@angular/core';
import {FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  form = new FormGroup({
    topics:new FormArray([])
  });

  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value= ' ';
  }
  removeTopic(topic:FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
get topics(){
  return this.form.get('topics') as FormArray;
}

}
