import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFriestore: AngularFirestore) { }

  crear(collectionName: string, element: any) {
    return this.angularFriestore.collection(collectionName).add(element);
  }

  obtener_todos(collectionName: string){
    return this.angularFriestore.collection(collectionName).snapshotChanges();
  }
}
