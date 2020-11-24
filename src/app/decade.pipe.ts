import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decade'
})
export class DecadePipe implements PipeTransform {

  transform(movies:any[], decade:any): unknown {
    if(decade === 'all') {
      return movies;
    } else {
      decade = parseInt(decade);

      return movies.filter(movie => {
        const year = parseInt(movie.Year); 
        return year >= decade && year < decade+10;
      });
    }
  }

}
