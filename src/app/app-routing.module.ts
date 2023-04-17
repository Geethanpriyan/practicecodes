import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { ClienthttpExtendserviceComponent } from './components/clienthttp-extendservice/clienthttp-extendservice.component';
import { ProductsComponent } from './components/products/products.component';
import { BindingComponent } from './components/welcome/binding/binding.component';
import { DellComponent } from './dell/dell.component';
import { DirectComponent } from './direct/direct.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { GuardsComponent } from './guards/guards.component';
import { AuthGuard } from './gurads/auth.guard';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobliesComponent } from './moblies/moblies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RouteparamComponent } from './routeparam/routeparam.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  {
    path:'binding',
    component:BindingComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'directives',
    component:DirectComponent
  },
  {path:'pipes',
  component:PipesComponent
},
{path:'templatedriven',
component:TemplatedrivenComponent
},
{
  path:'reactiveform',
  component:ReactiveformComponent
},
{
  path:'clienthttp-extendservice',
  component:ClienthttpExtendserviceComponent
},
{
path:'',
redirectTo:'/binding',pathMatch:'full'
},
/*{
  path:'**',
component:PagenotfoundComponent

},*/
{
  path:'animation',
  component:AnimationComponent
},
{
  path:'routeparam/:id',
  component:RouteparamComponent
},
{
  path:'laptops',
  component:LaptopsComponent,
 children:[{path:'dell',
 component:DellComponent,
}]
},
{
  path:'moblies',
  component:MobliesComponent,
},

{
  path:'earphones',
  component:EarphonesComponent,
},
{
  path:'gurads',
  component:GuardsComponent,
  canActivate:[AuthGuard]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
