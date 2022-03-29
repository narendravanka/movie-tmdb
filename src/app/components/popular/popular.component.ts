import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  popularMoviesData: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getPopularMovies()
      .subscribe((data: any) => (this.popularMoviesData = data.results));
  }
}
