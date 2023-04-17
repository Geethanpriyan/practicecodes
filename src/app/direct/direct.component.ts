import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent {
constructor(public sharedService:SharedService){

}
stock='think positive'
att(){
  this.sharedService.think=this.stock;
}
}
