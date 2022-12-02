import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardutentiComponent } from './cardutenti.component';

describe('CardutentiComponent', () => {
  let component: CardutentiComponent;
  let fixture: ComponentFixture<CardutentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardutentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardutentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
