import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'clienthttp-extendservice',
  templateUrl: './clienthttp-extendservice.component.html',
  styleUrls: ['./clienthttp-extendservice.component.scss']
})
export class ClienthttpExtendserviceComponent {
  response:any;
constructor(public httpClient:HttpClient){

  this.httpClient.get('https://catfact.ninja/fact')
  .subscribe((response)=>{
    console.log(response)
      this.response=response;
  })
}
}
