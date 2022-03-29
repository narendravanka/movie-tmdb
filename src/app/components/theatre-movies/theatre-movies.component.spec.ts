import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreMoviesComponent } from './theatre-movies.component';

describe('TheatreMoviesComponent', () => {
  let component: TheatreMoviesComponent;
  let fixture: ComponentFixture<TheatreMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
