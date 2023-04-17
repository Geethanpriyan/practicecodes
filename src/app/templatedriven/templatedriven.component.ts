import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
  hh='hello';
  gg='heyy'
  form(registrationForm:NgForm){
 console.log(registrationForm);
  }
}
