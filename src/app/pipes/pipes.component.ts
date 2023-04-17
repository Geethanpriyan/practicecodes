import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
position='java developer';
num=34.3;
num2=1;
day=new Date
person={name:'geethan',age:21,dep:'ECS',}
cash=1000;
constructor(public sharedService:SharedService){

}
stoc='no non no  noo'
btt(){
  this.sharedService.think=this.stoc;
}
ngOnInit(){
  console.log("pipe ngOninit call")
}
ngOnDestroy(){
  console.log("destory ngOnInit call")
}
ngOnChanges()
{
  console.log("ngOnChange call")
}
}
