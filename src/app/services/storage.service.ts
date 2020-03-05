import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getDataTeams(teamArray: string): any{
    return JSON.parse(localStorage.getItem('teamArray') || '[]');
  }

  setDataTeams(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
