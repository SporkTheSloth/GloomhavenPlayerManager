import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Player } from './db-objects/player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  playerPath: string = '/Player';
  playersRef: AngularFireList<any[]>;
  playerRef: AngularFireObject<any>;
  classRef: AngularFireList<any>;

  constructor(private fdb: AngularFireDatabase) { }

getPlayerList() {
  this.playersRef = this.fdb.list(this.playerPath);
  console.log("Players");
  console.log(this.playersRef);
  return this.playersRef;
}

getClassList() {
  this.classRef = this.fdb.list('/Classes');
  return this.classRef;
}

getPlayer(id: string) {
  const keyPath = '/Player/' + id;
  this.playerRef = this.fdb.object(keyPath);
  return this.playerRef;
}

//REMOVE THESE LATER
  getName() {
    return "BeastTyrant";
  }
}
