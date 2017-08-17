import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInteractivePizzaComponent } from './delivery-interactive-pizza.component';

describe('DeliveryInteractivePizzaComponent', () => {
  let component: DeliveryInteractivePizzaComponent;
  let fixture: ComponentFixture<DeliveryInteractivePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryInteractivePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInteractivePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
