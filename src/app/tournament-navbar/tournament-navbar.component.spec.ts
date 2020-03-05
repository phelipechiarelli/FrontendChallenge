import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentNavbarComponent } from './tournament-navbar.component';

describe('TournamentNavbarComponent', () => {
  let component: TournamentNavbarComponent;
  let fixture: ComponentFixture<TournamentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
