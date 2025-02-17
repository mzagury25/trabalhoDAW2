import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoInvestimentoComponent } from './grafico-investimento.component';

describe('GraficoInvestimentoComponent', () => {
  let component: GraficoInvestimentoComponent;
  let fixture: ComponentFixture<GraficoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoInvestimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
