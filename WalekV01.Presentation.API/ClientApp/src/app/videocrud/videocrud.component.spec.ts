import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocrudComponent } from './videocrud.component';

describe('VideocrudComponent', () => {
  let component: VideocrudComponent;
  let fixture: ComponentFixture<VideocrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
