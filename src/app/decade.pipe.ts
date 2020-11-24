import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decade'
})
export class DecadePipe implements PipeTransform {

  transform(movies:any[], decade:any=null): unknown {
    if(decade === 'all' || decade === null) {
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
