import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorInvestimentoComponent } from './simulador-investimento.component';

describe('SimuladorInvestimentoComponent', () => {
  let component: SimuladorInvestimentoComponent;
  let fixture: ComponentFixture<SimuladorInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuladorInvestimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
