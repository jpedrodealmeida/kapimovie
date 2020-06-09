import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopBarComponent } from './movie-top-bar.component';

describe('MovieTopBarComponent', () => {
  let component: MovieTopBarComponent;
  let fixture: ComponentFixture<MovieTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
