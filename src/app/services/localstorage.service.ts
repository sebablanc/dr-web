import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveItem(item: string, value: string){
    localStorage.setItem(item, value);
  }

  getItem(item: string): string{
    return localStorage.getItem(item);
  }

  removeItems(){
    localStorage.clear();
  }
}
