import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddVideoComponent } from './modal-add-video.component';

describe('ModalAddVideoComponent', () => {
  let component: ModalAddVideoComponent;
  let fixture: ComponentFixture<ModalAddVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
