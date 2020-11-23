import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'MovieSnippet',
  templateUrl: './movie-snippet.component.html',
  styleUrls: ['./movie-snippet.component.scss']
})
export class MovieSnippetComponent implements OnInit {

  constructor() { }

  @Input() link: string;
  @Input() rating: string;
  @Input() releaseDate: string;
  @Input() runtime: number;
  @Input() thumbnail: string;
  @Input() title: string;

  ngOnInit(): void {
  }

}
