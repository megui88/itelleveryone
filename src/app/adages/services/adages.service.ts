import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Adage} from '../Adage';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';


export const collection = 'adages';

@Injectable()
export class AdagesService {

  private adagesCollection: AngularFirestoreCollection<Adage>;
  readonly adages: Observable<Adage[]>;
  private adageSubject = new BehaviorSubject({} as Adage);

  adage: Observable<Adage>;

  constructor(
    private db: AngularFirestore
  ) {
    this.adagesCollection = this.db.collection(
      collection,
      ref => ref.orderBy('createAt', 'desc')
    );
    this.adages = this.adagesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Adage;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    this.adage = this.adageSubject.asObservable();
  }


  find(id: string): void {
    this.adagesCollection.doc<Adage>(`${id}`).snapshotChanges().pipe(
      map(
        a => {
          if (a.payload.exists === false) {
            return {} as Adage;
          }
          const data = a.payload.data() as Adage;
          data.id = a.payload.id;
          return data;
        })
    ).subscribe(
      adageResult => this.adageSubject.next(adageResult)
    );
  }

  clean(): void {
    this.adageSubject.next({} as Adage);
  }

  /**
   * @todo add pagginate
   * @see https://github.com/angular/angularfire2/blob/master/docs/firestore/querying-collections.md
   */
  all(): Observable<Adage[]> {
    return this.adages;
  }

  add(adage: Adage): Promise<any> {
    const {author, title, uid, photoURL} = adage;
    const description = adage.description || '';
    const createAt = new Date();
    return this.adagesCollection.add({author, title, uid, photoURL, description, createAt});
  }


  updateAdageData(adage) {
    const adageRef: AngularFirestoreDocument<any> = this.db.doc(`${collection}/${adage.id}`);

    const data: Adage = adage;
    data['description'] = adage.description || '';
    data['createAt'] = adage.createAt || new Date();
    return adageRef.update(data);

  }

  delete(id: string): Promise<void> {
    return this.adagesCollection.doc(`${id}`).delete();
  }
}
