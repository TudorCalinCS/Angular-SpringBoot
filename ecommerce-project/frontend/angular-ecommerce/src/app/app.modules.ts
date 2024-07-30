import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
//import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
   // HttpClient
  ],
  providers: [
    provideHttpClient(),
    ProductService,
    //HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
