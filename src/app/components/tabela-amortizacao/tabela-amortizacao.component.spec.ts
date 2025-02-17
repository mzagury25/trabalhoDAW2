import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAmortizacaoComponent } from './tabela-amortizacao.component';

describe('TabelaAmortizacaoComponent', () => {
  let component: TabelaAmortizacaoComponent;
  let fixture: ComponentFixture<TabelaAmortizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaAmortizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAmortizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
