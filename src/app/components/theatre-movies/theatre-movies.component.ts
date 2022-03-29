import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-theatre-movies',
  templateUrl: './theatre-movies.component.html',
  styleUrls: ['./theatre-movies.component.scss'],
})
export class TheatreMoviesComponent implements OnInit {
  data: any;
  theatreMovieData: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTheatreMovies().subscribe(
      (data: any) => {
        this.data = data;
        this.theatreMovieData = data.results;
        //  console.log(this.theatreMovieData);
      } /*  */
    );
  }
}
