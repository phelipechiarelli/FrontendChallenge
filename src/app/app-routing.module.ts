import { TournamentHomeComponent } from './tournament-home/tournament-home.component';
import { TournamentBracketsComponent } from './tournament-brackets/tournament-brackets.component';
import { TournamentCrudComponent } from './tournament-crud/tournament-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';


const routes: Routes = [
  {path: '', component: TournamentHomeComponent},
  {path: 'crudTournament', component: TournamentCrudComponent},
  {path: 'bracketsTournament', component: TournamentBracketsComponent},
  {path: 'home', component: TournamentHomeComponent},
  {path: 'teams', component: TournamentTeamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
