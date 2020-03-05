import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.scss']
})
export class TournamentTeamsComponent implements OnInit {

  teamArray : StorageService;

  constructor(private datalistService: StorageService) { 
    this.teamArray = this.datalistService.getDataTeams('teamArray');
    console.log('teamArray: ' + JSON.stringify(this.teamArray));
  }

  ngOnInit(): void {


  }
}
