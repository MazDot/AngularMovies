import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActorComponent } from './form-actor.component';

describe('FormActorComponent', () => {
  let component: FormActorComponent;
  let fixture: ComponentFixture<FormActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormActorComponent]
    });
    fixture = TestBed.createComponent(FormActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
