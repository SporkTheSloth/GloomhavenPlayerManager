import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterBannerComponent } from './character-banner/character-banner.component';
import { FireService } from './services/fire.service';
import { ClassSelectionComponent } from './class-selection/class-selection.component';
@NgModule({
  declarations: [
    AppComponent,
    CharacterBannerComponent,
    ClassSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
    FireService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
