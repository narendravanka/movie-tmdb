import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './components/kids/kids.component';
import { LandingComponent } from './components/landing/landing.component';
import { MovieComponent } from './components/movie/movie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PopularComponent } from './components/popular/popular.component';
import { TheatreMoviesComponent } from './components/theatre-movies/theatre-movies.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'popular',
    component: PopularComponent,
  },
  {
    path: 'kids',
    component: KidsComponent,
  },
  {
    path: 'theatreMovies',
    component: TheatreMoviesComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
