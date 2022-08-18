import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutemailComponent } from './putemail.component';

describe('PutemailComponent', () => {
  let component: PutemailComponent;
  let fixture: ComponentFixture<PutemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
