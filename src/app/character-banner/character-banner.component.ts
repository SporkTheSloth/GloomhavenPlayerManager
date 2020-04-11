import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'character-banner',
  templateUrl: './character-banner.component.html',
  styleUrls: ['./character-banner.component.css']
})
export class CharacterBannerComponent {
  player$;

  constructor(db: AngularFireDatabase) {
  this.player$ = db.object('/Player/Buttercup').valueChanges();
  console.log(this.player$);
  }

}
