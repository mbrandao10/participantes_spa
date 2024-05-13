import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesTableComponent } from './participantes-table.component';

describe('ParticipantesTableComponent', () => {
  let component: ParticipantesTableComponent;
  let fixture: ComponentFixture<ParticipantesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
