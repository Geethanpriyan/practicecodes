import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input()
value=0;

rat(){
  return 'star';
}
getArrayWithnElements(n:number):any[]{
let arr:any[]=[];
let i;
for(i=1;i<=n;i++){
  arr.push(i);
  
}
  return arr;
}

  star(){
    
  }
  ngOnInit(){
    console.log("rating ngOninit call")
  }
  ngOnDestroy(){
    console.log("destory ngOnInit call")
  }
  ngOnChanges()
  {
    console.log("ngOnChange call")
  }
  ngDoCheck()
  {
    console.log("rating ngDoCheck")
  }
}


