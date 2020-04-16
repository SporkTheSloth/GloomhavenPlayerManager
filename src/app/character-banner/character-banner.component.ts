import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FireService } from './../services/fire.service';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Player } from './../services/db-objects/player';
import {Observable} from 'rxjs';
@Component({
  selector: 'character-banner',
  templateUrl: './character-banner.component.html',
  styleUrls: ['./character-banner.component.css']
})

export class CharacterBannerComponent implements OnInit {


  public player$;
  playerData : any = [];
  singlePlayer : Player;
  constructor(private service: FireService) { }


ngOnInit() {
   this.service.getPlayerList().snapshotChanges().subscribe( p => {
    p.forEach(item => {
       let a = item.payload.toJSON();
       a['$key'] = item.key;
       this.playerData.push(a as Player)
     })
   })
 }

 isPlayer(name: string) {
   for (let entry of this.playerData)
   {
     if(entry.Name === name)
     {
       return true;
     }
   }
   return false;
 }

 setPlayer(name: string) {
   if(this.isPlayer(name))
   {
     this.updatePlayer(name);
   }
 }

testingPlayer() {
  this.service.getPlayer("Buttercup").snapshotChanges().subscribe( item => {
      let a = item.payload.toJSON();
      if(Object.keys(a).length > 0)
      {
        a['$key'] = item.key;
        this.singlePlayer = (a as Player);
      }
    })
}
 updatePlayer(name: string)
 {
   if (this.service.getPlayer(name))
   {
     this.service.getPlayer(name).snapshotChanges().subscribe( item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.singlePlayer = (a as Player);
     })
   }
 }



  log(x)
  {console.log(x)};

  getLevel(exp) {
    let level: number = 0;
    if(exp >= 500) {
      level = 9;
    } else if (exp >= 420) {
      level = 8;
    } else if (exp >= 345) {
      level = 7;
    } else if (exp >= 275) {
      level = 6;
    } else if (exp >= 210) {
      level = 5;
    } else if (exp >= 150) {
      level = 4;
    } else if (exp >= 95) {
      level = 3;
    } else if (exp >= 45) {
      level = 2;
    } else {
      level = 1;
    }
    return level;
  }

  levelProgress(exp){
    let lev = (<number>this.getLevel(exp));
    lev = lev/9;
    lev = Math.trunc(lev*100);
    return lev;
  }

  expProgress(exp) {
    let lev = (<number>this.getLevel(exp));
    let cap : number = 0;
    let base : number = 0;
    switch(lev) {
      case 1: {
        cap = 45;
        base = 0;
        break;
      }
      case 2: {
        cap = 95;
        base = 45;
        break;
      }
      case 3: {
        cap = 150;
        base = 95;
        break;
      }
      case 4: {
        cap = 210;
        base = 150;
        break;
      }
      case 5: {
        cap = 275;
        base = 210;
        break;
      }
      case 6: {
        cap = 345;
        base = 275;
        break;
      }
      case 7: {
        cap = 420;
        base = 345;
        break;
      }
      case 8: {
        cap = 500;
        base = 420;
        break;
      }
      default: {
        return 100;
        break;
      }
    }
    let prog = ((exp-base)/(cap-base))*100;
    return Math.trunc(prog);
  }
}
