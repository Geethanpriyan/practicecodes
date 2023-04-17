import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/welcome/binding/binding.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingComponent } from './components/rating/rating.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectComponent } from './direct/direct.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ClienthttpExtendserviceComponent } from './components/clienthttp-extendservice/clienthttp-extendservice.component';
import{HttpClientModule}from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouteparamComponent } from './routeparam/routeparam.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobliesComponent } from './moblies/moblies.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { DellComponent } from './dell/dell.component';
import { GuardsComponent } from './guards/guards.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BindingComponent,
    ProductsComponent,
    RatingComponent,
    HighlightDirective,
    DirectComponent,
    PipesComponent,
    CustompipePipe,
    TemplatedrivenComponent,
    ReactiveformComponent,
    ClienthttpExtendserviceComponent,
    PagenotfoundComponent,
    AnimationComponent,
    RouteparamComponent,
    LaptopsComponent,
    MobliesComponent,
    EarphonesComponent,
    DellComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
