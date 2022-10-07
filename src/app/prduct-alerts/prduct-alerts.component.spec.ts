import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductAlertsComponent } from './prduct-alerts.component';

describe('PrductAlertsComponent', () => {
  let component: PrductAlertsComponent;
  let fixture: ComponentFixture<PrductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
