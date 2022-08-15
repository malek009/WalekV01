import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAddActorComponent } from './model-add-actor.component';

describe('ModelAddActorComponent', () => {
  let component: ModelAddActorComponent;
  let fixture: ComponentFixture<ModelAddActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAddActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAddActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
