import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tontinard } from 'src/app/shared/models/tontinard';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  items: Tontinard[];

  // Collection : To talk with  cloud firebase
  tontinardCollection: AngularFirestoreCollection<Tontinard>;

  // Table in Hande
  tontinards$: Observable<Tontinard[]>;

  constructor(angularFirestore: AngularFirestore) {
    this.tontinardCollection = angularFirestore.collection('tontinards');
    this.tontinards$ = this.tontinardCollection.valueChanges();
    this.tontinards$.subscribe(i => this.items = i);
  }

  ngOnInit(): void {

  }

}
