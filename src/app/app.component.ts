import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'bat-app';

  public movies:[];

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.apiService.getMoviesByTitle('batman').subscribe((movies:any) => this.movies = movies.Search);
  }
}
