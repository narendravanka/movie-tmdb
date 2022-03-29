import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  discoverMovieUrl = `${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}`;
  // baseurl = 'https://api.themoviedb.org/3/movie/';
  movieByIdUrl = '';
  theatreMoviesUrl = `${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-03-25`;
  kidsMoviesUrl = `${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
  popularMoviesUrl = `${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&sort_by=popularity.desc`;
  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.http.get(this.discoverMovieUrl);
  }
  getMovieScreenshots(id: number) {
    return this.http.get(
      `${environment.BASE_URL}/movie/${id}/images?api_key=${environment.API_KEY}`
    );
  }
  getMovieById(id: number) {
    this.movieByIdUrl =
      environment.BASE_URL + '/movie/' + id + '?api_key=' + environment.API_KEY;
    // console.log(this.movieByIdUrl);
    return this.http.get(this.movieByIdUrl);
  }
  getTheatreMovies() {
    return this.http.get(this.theatreMoviesUrl);
  }
  getKidsMovies() {
    return this.http.get(this.kidsMoviesUrl);
  }
  getPopularMovies() {
    return this.http.get(this.popularMoviesUrl);
  }
}
