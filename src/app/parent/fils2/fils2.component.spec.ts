import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fils2Component } from './fils2.component';

describe('Fils2Component', () => {
  let component: Fils2Component;
  let fixture: ComponentFixture<Fils2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fils2Component]
    });
    fixture = TestBed.createComponent(Fils2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
