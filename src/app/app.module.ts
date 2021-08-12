import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { RatingModule } from 'ng-starrating';
import { HttpClientModule } from '@angular/common/http';
import { NgaReadMoreModule } from 'nga-read-more';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    RatingModule,
    HttpClientModule,
    NgaReadMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
