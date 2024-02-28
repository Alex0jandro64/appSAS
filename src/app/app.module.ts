import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"appcitassas-76061","appId":"1:463501687779:web:a38fc56c705d9999937ed6","storageBucket":"appcitassas-76061.appspot.com","locationId":"europe-west","apiKey":"AIzaSyA_AoFgN6CuJkafc1T29Plu-iDmTvbdeIA","authDomain":"appcitassas-76061.firebaseapp.com","messagingSenderId":"463501687779"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
