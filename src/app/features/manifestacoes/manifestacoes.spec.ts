import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manifestacoes } from './manifestacoes';

describe('Manifestacoes', () => {
  let component: Manifestacoes;
  let fixture: ComponentFixture<Manifestacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manifestacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manifestacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
