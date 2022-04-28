import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditVideoComponent } from './modal-edit-video.component';

describe('ModalEditVideoComponent', () => {
  let component: ModalEditVideoComponent;
  let fixture: ComponentFixture<ModalEditVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
