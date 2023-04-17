import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
username=new FormControl('')

fu(){
  console.log(this.username.setValue('jogee'));
 
}
 registerationform=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
 })
cli(){
  console.log(this.registerationform.patchValue({
    username:'jogee',
   
  }));
}
}
