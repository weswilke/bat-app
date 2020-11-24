import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MovieSnippetComponent } from './movie-snippet/movie-snippet.component';
import { DecadePipe } from './decade.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MovieSnippetComponent,
    DecadePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
