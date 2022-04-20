import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglevideoComponent } from './singlevideo.component';

describe('SinglevideoComponent', () => {
  let component: SinglevideoComponent;
  let fixture: ComponentFixture<SinglevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
