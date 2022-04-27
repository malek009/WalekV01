import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycrudComponent } from './categorycrud.component';

describe('CategorycrudComponent', () => {
  let component: CategorycrudComponent;
  let fixture: ComponentFixture<CategorycrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorycrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
