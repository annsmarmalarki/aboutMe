import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MeSite2Component } from './me-site2/me-site2.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MeSite2Component
  ],

  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MaterializeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLlIxPN6zLxZSbmVf3BCLtXysybV3jGhw'
    }),
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
