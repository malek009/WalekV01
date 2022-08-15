import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorcrudComponent } from './actorcrud.component';

describe('ActorcrudComponent', () => {
  let component: ActorcrudComponent;
  let fixture: ComponentFixture<ActorcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
