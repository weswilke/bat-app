import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MovieSnippetComponent } from './movie-snippet/movie-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MovieSnippetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
