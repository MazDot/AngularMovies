import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMarkdownComponent } from './input-markdown.component';

describe('InputMarkdownComponent', () => {
  let component: InputMarkdownComponent;
  let fixture: ComponentFixture<InputMarkdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMarkdownComponent]
    });
    fixture = TestBed.createComponent(InputMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
