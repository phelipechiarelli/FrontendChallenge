import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { TournamentCrudComponent } from './tournament-crud/tournament-crud.component';
import { TournamentHomeComponent } from './tournament-home/tournament-home.component';
import { TournamentBracketsComponent } from './tournament-brackets/tournament-brackets.component';
import { StorageService } from './services/storage.service';
import { DragulaModule } from 'ng2-dragula';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';
import { TournamentNavbarComponent } from './tournament-navbar/tournament-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    TournamentCrudComponent,
    TournamentHomeComponent,
    TournamentBracketsComponent,
    TournamentTeamsComponent,
    TournamentNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-bottom-center',
      timeOut: 5000,
      progressBar: true,
      progressAnimation:	'decreasing'
    })
   
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
