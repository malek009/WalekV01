import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShowCategoriesComponent } from './modal-show-categories.component';

describe('ModalShowCategoriesComponent', () => {
  let component: ModalShowCategoriesComponent;
  let fixture: ComponentFixture<ModalShowCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShowCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShowCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
