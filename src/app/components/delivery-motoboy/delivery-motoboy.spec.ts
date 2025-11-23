import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMotoboy } from './delivery-motoboy';

describe('DeliveryMotoboy', () => {
  let component: DeliveryMotoboy;
  let fixture: ComponentFixture<DeliveryMotoboy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryMotoboy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryMotoboy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
