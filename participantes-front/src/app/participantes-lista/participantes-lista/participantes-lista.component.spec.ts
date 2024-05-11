import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesListaComponent } from './participantes-lista.component';

describe('ParticipantesListaComponent', () => {
  let component: ParticipantesListaComponent;
  let fixture: ComponentFixture<ParticipantesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
