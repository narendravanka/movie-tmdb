import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  kidsMovieData: any;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.moviesService
      .getKidsMovies()
      .subscribe((data: any) => (this.kidsMovieData = data.results));
  }
}
