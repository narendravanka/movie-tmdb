import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment.prod';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let h3: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h3 = fixture.nativeElement.querySelector('h1');
  });

  it('should create header', () => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Poster pic not rendered', () => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    expect(
      `https://image.tmdb.org/t/p/w500/j2zyoYrWjWyraHMdkqAkSG1MISJ.jpg?api_key=${environment.API_KEY}`
    ).toEqual(component.getImage('j2zyoYrWjWyraHMdkqAkSG1MISJ.jpg'));
  });
  it('Should contain h3 tag A 18+', () => {
    expect('A 18+').toContain(component._18plus);
  });
});
