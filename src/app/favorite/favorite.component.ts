import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'], 

})
export class FavoriteComponent implements OnInit {
  @Input('isfavorite')  isSelected:boolean;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  this.isSelected = !this.isSelected;
  this.click.emit({newValue:this.isSelected});
}
}

export interface FavoritechangedEventArgs{
  newValue:boolean;
}