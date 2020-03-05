import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tournament-navbar',
  templateUrl: './tournament-navbar.component.html',
  styleUrls: ['./tournament-navbar.component.scss']
})
export class TournamentNavbarComponent implements OnInit {

  navigation: string = '';

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  goCrudTournament(){
    this.navigation = '';
    this.router.navigate(['/crudTournament']);
  }

  goTeamTournament(){
    this.navigation = '';
    this.router.navigate(['/teams']);
  }

  gobracketsTournament(){
    this.router.navigate(['/bracketsTournament']);
    this.navigation = 'bracketsTournament';
  }

  back(){
    this.navigation = '';
    this.router.navigate(['/home'])
  }

  clearData(){  
    this.navigation = '';  
    window.localStorage.clear();
    this.toastr.info('All data has been deleted', 'Data delete');
    this.router.navigate(['/home'])
  }

}
