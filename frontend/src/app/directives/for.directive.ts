import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.numbers);
  }


}
