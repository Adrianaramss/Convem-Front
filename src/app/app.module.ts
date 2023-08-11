import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente';
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }