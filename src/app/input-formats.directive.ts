import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormats]'
})
export class InputFormatsDirective {
@Input('appInputFormats') format;
  constructor(private el: ElementRef) {  }

  @HostListener('blur') onblur(){
    let value= this.el.nativeElement.value;
    if(this.format == 'uppercase')
    this.el.nativeElement.value=value.toLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();
  }

  

}
