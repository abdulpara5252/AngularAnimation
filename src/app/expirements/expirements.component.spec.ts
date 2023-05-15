import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirementsComponent } from './expirements.component';

describe('ExpirementsComponent', () => {
  let component: ExpirementsComponent;
  let fixture: ComponentFixture<ExpirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
