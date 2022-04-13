import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let a: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [HeaderComponent],
      providers: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    a = fixture.nativeElement.querySelector('h1');
    it('Should display anchor tags', () => {
      expect(a.textContent).toContain('Kids');
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
