import { Component, OnInit } from '@angular/core';
import { FireService } from './../services/fire.service';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Player } from './../services/db-objects/player';
import { Class } from './../services/db-objects/class';
import {Observable} from 'rxjs';

@Component({
  selector: 'class-selection',
  templateUrl: './class-selection.component.html',
  styleUrls: ['./class-selection.component.css']
})
export class ClassSelectionComponent implements OnInit {
classData : any = [];

  constructor(private service: FireService) { }

  ngOnInit(): void {
    this.service.getClassList().snapshotChanges().subscribe( p => {
     p.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.classData.push(a as Class)
      })
    })
  }

//Create selectable images
setSelected(id): void {
  var classSelected = document.querySelectorAll(".class-selected");
  var selectedClass = classSelected[0];
  selectedClass.classList.remove("class-selected");
  	document.getElementById("NightShroud").classList.add("class-selected");
}
}
