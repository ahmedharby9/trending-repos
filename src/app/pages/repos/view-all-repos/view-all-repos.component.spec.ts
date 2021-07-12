import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReposComponent } from './view-all-repos.component';

describe('ViewAllReposComponent', () => {
  let component: ViewAllReposComponent;
  let fixture: ComponentFixture<ViewAllReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
