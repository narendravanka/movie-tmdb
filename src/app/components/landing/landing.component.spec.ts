import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let serviceStub: Partial<MovieService>;
  let getQuoteSpy: any;
  let movieService: any;
  let testData = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      // providers: [{ provide: MovieService, useValue: serviceStub }],
      declarations: [LandingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // can use either one; movieService is root injector safe to use 2 option
    //  userService = fixture.debugElement.injector.get(MovieService)
    movieService = TestBed.inject(MovieService);
    serviceStub = {};
    // const movieServiceSpy = jasmine.createSpyObj('MovieService', [
    //   'getMovieList',
    // ]);
    // getQuoteSpy = movieServiceSpy
    //   .getMovieList()
    //   .and.returnValue(of(serviceStub));
  });

  it('Should render movie list', () => {
    expect(testData).toEqual(serviceStub);
  });
});
