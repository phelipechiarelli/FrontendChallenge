import { Component, OnInit} from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tournament-brackets',
  templateUrl: './tournament-brackets.component.html',
  styleUrls: ['./tournament-brackets.component.scss']
})

export class TournamentBracketsComponent implements OnInit {

  teamArray : StorageService;

  constructor(private datalistService: StorageService) { 
    // this.teamArray = JSON.parse(localStorage.getItem('teamArray') || '[]');
    this.teamArray = this.datalistService.getDataTeams('teamArray');
    console.log('teamArray: ' + JSON.stringify(this.teamArray));
  }



  ngOnInit(): void {

  }

}
