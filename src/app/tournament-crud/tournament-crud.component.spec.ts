import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCrudComponent } from './tournament-crud.component';

describe('TournamentCrudComponent', () => {
  let component: TournamentCrudComponent;
  let fixture: ComponentFixture<TournamentCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
