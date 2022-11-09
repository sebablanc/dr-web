import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  get_collection_by_field(collectionName: string, field: string, searchElement?: any) {
    return this.angularFirestore.collection(collectionName, ref => {
      let query : CollectionReference | Query = ref;
      if (field && searchElement) { query = ref.where(field, '==', searchElement) };
      return query;
    }).valueChanges({idField: 'id'});
  }

  crear(collectionName: string, element: any) {
    return this.angularFirestore.collection(collectionName).add(element);
  }

  editar(collectionName: string, id: string, element: any) {
    try {
      this.angularFirestore.doc(collectionName + '/' + id).update(element);
      return true;
    } catch (e) {
      return false;
    }
  }

  eliminar(collectionName: string, id: string) {
    try {
      this.angularFirestore.doc(collectionName + '/' + id).delete();
      return true;
    } catch (e) {
      return false;
    }
  }

  obtener_todos(collectionName: string) {
    return this.angularFirestore.collection(collectionName).snapshotChanges();
  }

}
