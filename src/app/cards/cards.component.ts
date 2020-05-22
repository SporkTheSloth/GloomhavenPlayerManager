import { Component, OnInit } from '@angular/core';
import { FireService } from './../services/fire.service';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Player } from './../services/db-objects/player';
import { Class } from './../services/db-objects/class';
import {Observable} from 'rxjs';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() {private service: FireService}

  ngOnInit(): void {
    this.service.getClassList().snapshotChanges().subscribe( p => {
     p.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.classData.push(a as Class)
      })
    })
  }

}
