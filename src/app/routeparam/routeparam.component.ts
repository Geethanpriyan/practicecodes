import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routeparam',
  templateUrl: './routeparam.component.html',
  styleUrls: ['./routeparam.component.scss']
})
export class RouteparamComponent {
  id:any=""
constructor(public route:ActivatedRoute){
  this.id=this.route.snapshot.paramMap.get('id');
}
}
