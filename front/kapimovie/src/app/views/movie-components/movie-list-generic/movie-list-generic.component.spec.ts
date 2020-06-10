import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListGenericComponent } from './movie-list-generic.component';

describe('MovieListGenericComponent', () => {
  let component: MovieListGenericComponent;
  let fixture: ComponentFixture<MovieListGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
