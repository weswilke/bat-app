import { 
  Component, 
  OnChanges, 
  SimpleChanges, 
  Input, 
  ElementRef
} from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'MovieSnippet',
  templateUrl: './movie-snippet.component.html',
  styleUrls: ['./movie-snippet.component.scss']
})
export class MovieSnippetComponent implements OnChanges {
  isLoaded:boolean = false;
  ref:any;

  constructor(private apiService:ApiService, eleRef:ElementRef) {
    this.ref = eleRef;
  }

  @Input() link: string;
  @Input() releaseDate: string;
  @Input() thumbnail: string;
  @Input() title: string;
  @Input() imdbID: string;
  @Input() windowPos: number;

  rating:string;
  runtime:string;
  plot:string;

  ngOnChanges(changes: SimpleChanges) {
    if(!this.isLoaded && changes.windowPos.currentValue >= this.ref.nativeElement.offsetTop) {
      this.loadMoreData(this.imdbID);
      this.isLoaded = true;
    }
  }

  private loadMoreData(imdbID) {
    this.apiService.getMovieById(imdbID)
      .subscribe((update:any) => {
        this.rating = update.Rated;
        this.runtime = update.Runtime;
        this.plot = update.Plot;
      });
  }
}
