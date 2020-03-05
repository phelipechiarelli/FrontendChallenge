import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tournament-crud',
  templateUrl: './tournament-crud.component.html',
  styleUrls: ['./tournament-crud.component.scss']
})
export class TournamentCrudComponent implements OnInit {

  teamName: String;
  teamRealm: String[] = ['Bandle City', 'Bilgewater', 'Demacia', 'Freljord', 
                         'Ionia', 'Ixtal', 'Noxus', 'Piltover', 'Shadow Isles',
                         'Shurima', 'Targon', 'The Void', 'Zaun'];

  crudForm: FormGroup;
  err: any;
  counter: number = 0;

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService) {   }

  ngOnInit(): void {
    this.createCrudForm();

  }

  createCrudForm(){
    this.crudForm = this.fb.group({
      teamName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)])],
        teamRealm: ['',Validators.compose([Validators.required])]
    })
  }

  back(){
    this.router.navigate(['/home'])
  }

  includeTeam(){    
    let teamArray = JSON.parse(localStorage.getItem('teamArray') || '[]');

    let teamData = {
      teamName: this.crudForm.get('teamName').value,
      teamRealm: this.crudForm.get('teamRealm').value
    }

    if (this.counter < 17 ) {
      teamArray.push(teamData);
      window.localStorage.setItem('teamArray', JSON.stringify(teamArray));
      this.crudForm.reset(); 
      this.toastr.success('Team successfully included!', 'Well done!');
    }
    this.counter = this.counter+1;
    console.log('counter: ' + this.counter);
  }

  get crudTeamName(){
    return this.crudForm.get('teamName');
  }

  get crudTeaamRealm(){
    return this.crudForm.get('teamRealm');
  }

}
