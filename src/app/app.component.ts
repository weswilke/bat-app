import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'bat-app';
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();
  windowPos = 0;
  public movies:any[];

  constructor(private apiService:ApiService) {
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
			.subscribe((e: Event) => this.windowPos = this.getYPosition(e));
  }

  ngOnInit() {
    this.apiService.getMoviesByTitle('batman')
      .subscribe((movies:any) => {
        this.movies = movies.Search; 
        this.windowPos = window.innerHeight;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  getYPosition(e): number {
    const target:Element = e.target.scrollingElement;

    return target.scrollTop + target.clientHeight;
  }
}
