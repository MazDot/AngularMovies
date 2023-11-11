import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActorComponent } from './create-actor.component';

describe('CreateActorComponent', () => {
  let component: CreateActorComponent;
  let fixture: ComponentFixture<CreateActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateActorComponent]
    });
    fixture = TestBed.createComponent(CreateActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
