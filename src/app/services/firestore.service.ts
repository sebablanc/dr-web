import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFriestore: AngularFirestore) { }

  crear(collectionName, element) {
    return this.angularFriestore.collection(collectionName).add(element);
  }
}
