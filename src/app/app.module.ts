import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './components/landing/landing.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieScreenshotComponent } from './components/movie-screenshot/movie-screenshot.component';
import { PopularComponent } from './components/popular/popular.component';
import { KidsComponent } from './components/kids/kids.component';
import { TheatreMoviesComponent } from './components/theatre-movies/theatre-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LandingComponent,
    MovieCardComponent,
    MovieComponent,
    MovieScreenshotComponent,
    PopularComponent,
    KidsComponent,
    TheatreMoviesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
