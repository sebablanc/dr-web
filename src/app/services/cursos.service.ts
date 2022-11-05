import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  collectionName = 'Cursos';

  constructor(private firestoreSrv: FirestoreService) { }

  crear_curso(element) {
    return this.firestoreSrv.crear(this.collectionName, element);
  }
}
