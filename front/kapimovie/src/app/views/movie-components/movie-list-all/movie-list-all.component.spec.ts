import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListAllComponent } from './movie-list-all.component';

describe('MovieListAllComponent', () => {
  let component: MovieListAllComponent;
  let fixture: ComponentFixture<MovieListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
