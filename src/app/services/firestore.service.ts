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

  editar(collectionName: string, id: string, element: any) {
    try{
      this.angularFriestore.doc(collectionName + '/' + id).update(element);
      return true;
    } catch(e){
      return false;
    }
  }

  eliminar(collectionName: string, id: string){
    try{
      this.angularFriestore.doc(collectionName + '/' + id).delete();
      return true;
    } catch(e){
      return false;
    }
  }

  obtener_todos(collectionName: string){
    return this.angularFriestore.collection(collectionName).snapshotChanges();
  }
}
