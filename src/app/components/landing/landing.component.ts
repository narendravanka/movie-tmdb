import { Component, Input, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  //data =
  //'{"name": "Tiger","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';
  data: any;
  result: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((result: any) => {
      this.data = result;
      this.setLimit(this.data, 15);
    });
  }
  setLimit(data: any, limit: number) {
    this.result = data.results.slice(0, 15);
  }
}
