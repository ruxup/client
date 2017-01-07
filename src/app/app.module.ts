import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormsModule } from "@angular/forms";

import { MyApp } from './app.component';

import { AuthService } from '../providers/auth-service';
import { ApiService } from '../providers/api-service';
import { ProfileService } from '../providers/profile-service';
import { EventService } from '../providers/event-service';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { FindEventPage } from '../pages/event/find-event/find-event';
import { CreateEventPage } from '../pages/event/create-event/create-event';
import { ProfilePage } from '../pages/profile/profile';
//
// import { MultiPickerModule } from 'ion-multi-picker';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    FindEventPage,
    CreateEventPage,
    ProfilePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // MultiPickerModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    FindEventPage,
    CreateEventPage,
    ProfilePage,
  ],
  providers: [Storage,
              ApiService,
              AuthService,
              ProfileService,
              EventService]
})
export class AppModule {}
