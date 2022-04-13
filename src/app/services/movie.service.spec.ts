import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { environment } from 'src/environments/environment.prod';

describe('MovieService', () => {
  var service: MovieService;
  var httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve movie by id from the API via GET', () => {
    const dummyPosts = {
      adult: false,
      backdrop_path: '/ky7uPBRqWmgE6PelQ6BAfairDKB.jpg',
      belongs_to_collection: null,
      budget: 0,
      genres: [
        {
          id: 99,
          name: 'Documentary',
        },
      ],
      homepage: '',
      id: 949214,
      imdb_id: null,
      original_language: 'fr',
      original_title: "Gandhi, de l'homme à l'icône",
      overview: '',
      popularity: 0.6,
      poster_path: '/bRUusBi86WEQ2cIX02u1ItCnUdP.jpg',
      production_companies: [
        {
          id: 7131,
          logo_path: '/eLvjHPYZ12GR58lrDgg6MXZp2a3.png',
          name: 'France Télévisions',
          origin_country: 'FR',
        },
        {
          id: 92191,
          logo_path: null,
          name: 'Temps noir',
          origin_country: 'FR',
        },
      ],
      production_countries: [],
      release_date: '2019-01-01',
      revenue: 0,
      runtime: 0,
      spoken_languages: [],
      status: 'Released',
      tagline: '',
      title: "Gandhi, de l'homme à l'icône",
      video: false,
      vote_average: 6.0,
      vote_count: 1,
    };

    service.getMovieById(949214).subscribe((posts) => {
      expect(posts).toEqual(dummyPosts);
    });
    const id = 949214;
    const getRequest = httpMock.expectOne(
      `${environment.BASE_URL}/movie/${id}?api_key=${environment.API_KEY}`
    );
    expect(getRequest.request.method).toBe('GET');
    getRequest.flush(dummyPosts);
  });
  //it('Kids movie data should rendered', () => {});
});
