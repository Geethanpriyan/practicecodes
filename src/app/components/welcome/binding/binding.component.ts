import { SelectorContext } from "@angular/compiler";
import { Component, Output } from "@angular/core"
import { bindCallback } from "rxjs";

@Component({
    selector: 'binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.scss']
})
export class BindingComponent
{
    ok=true;

    fullstack ='geethan';         //interpolation
    stack='angular';
    show=true;                  //true kudutha print agum false kudutha print agathu
    aray=[10,20,30,40];
    vary={oppo:true};            //false kudutha atha css la apply agathu thaniya agum
   style={backgroundColor: 'grey',fontSize:'xx-large',fontFamily:'sans-serif'}
    url="https://www.dell.com"
    flow:any[]=[];
   value='';
   binding='binding'
  ang(){
  //alert ("heyyy user");
  this.fullstack='angular'; //
  }
  
  yes(){
   
  //this.ok=!this.ok;         // not potu irukura nala true ana false agum false ana true agum
    if(this.ok==true){
      this.ok=false;
    }
    else{
      this.ok=true;
    }
  }
  hlo(){
  this.flow.push('newvalue');
   
  }
  aio(value:any){

    alert("please close the tab");
    console.log(value);
  }
  
  
 
   //no(){
  //this.ok=false;              //hide show ku html la click function potu
  //}
  
  
}