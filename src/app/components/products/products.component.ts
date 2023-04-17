import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 
Moblies=[{
 model:'oppof21',
 price :25000,
 processor:'snapdragon 695',
 rating:4.2
},
{
  model:'vivo y20',
  price:13500,
  processor:'mediatek dimensity',
  rating:4.1
},
{
model:'realme20 pro',
price:17000,
processor:'helio 720',
rating:4.2
},
{
  model:'vivo y15',
  price:1500,
  processor:'mediatek710',
  rating:4
}]
 

}
