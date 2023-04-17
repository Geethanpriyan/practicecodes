import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent
{
    @Input()
    name='';
    @Output()
     hi:EventEmitter<number>=new EventEmitter();      // another method is hi=new EvenEmitter();

    lol(){
        alert("shutup");
      this.hi.emit(10);
    }
   ngAfterViewInit(){
    console.log("welcome ngAfterViewInit call")
   }
   ngAfterViewChecked(){
    console.log("welcome ngAfterViewChecked call")
   }
   ngAfterContentInit(){
    console.log("welcome ngAfterContentInit call")
   }
   ngAfterContentChecked(){
    console.log("welcome ngAfterContentChecked call")
   }
   } 
