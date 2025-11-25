import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motoboy } from './motoboy';

describe('Motoboy', () => {
  let component: Motoboy;
  let fixture: ComponentFixture<Motoboy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motoboy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motoboy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
