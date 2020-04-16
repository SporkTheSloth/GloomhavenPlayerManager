import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})

class Player {
  constructor(public name) { }
}
export class FireDBService
{
public player$: AngularFireList<Player[]>;

constructor(gloomData: AngularFireDatabase) {
this.player$ = gloomData.list('/Player');
console.log(this.player$);
}

isExistingPlayer(name) {
  return true;
}

createPlayer(name){
  console.log("Creating Player!");
}

getPlayerName(){
  return "BeastTyrant";
}

loadPlayerXP(name){
  return 215;
}

loadPlayerLevel(name){
  return 5;
}
}
