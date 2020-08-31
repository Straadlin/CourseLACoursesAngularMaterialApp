import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesManagerComponent } from './courses-manager.component';

describe('CoursesManagerComponent', () => {
  let component: CoursesManagerComponent;
  let fixture: ComponentFixture<CoursesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
