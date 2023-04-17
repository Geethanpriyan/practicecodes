import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='angular';

 binding=false;
 product=false;


  bin(){
this.binding=true;

  }
  pro(){
this.product=true;
this.binding=false;
  }
 
}
