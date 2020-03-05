import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tournament-home',
  templateUrl: './tournament-home.component.html',
  styleUrls: ['./tournament-home.component.scss']
})
export class TournamentHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCrudTournament(){
    this.router.navigate(['/crudTournament']);
  }

  goTeamTournament(){
    this.router.navigate(['/teams']);
  }

  gobracketsTournament(){
    this.router.navigate(['/bracketsTournament']);
  }

}
