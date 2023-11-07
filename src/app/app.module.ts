import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { DialogbbComponent } from './portfolio/dialog/dialog-bb.component';
import { DialogCaixaComponent } from './portfolio/dialog/dialog-caixa.component';
import { DialogCamaraComponent } from './portfolio/dialog/dialog-camara.component';
import { DialogCniComponent } from './portfolio/dialog/dialog-cni.component';
import { DialogPfComponent } from './portfolio/dialog/dialog-pf.component';
import { DialogRfbComponent } from './portfolio/dialog/dialog-rfb.component';
import { DialogSicoobComponent } from './portfolio/dialog/dialog-sicoob.component';
import { DialogStfComponent } from './portfolio/dialog/dialog-stf.component';
import { DialogTcuComponent } from './portfolio/dialog/dialog-tcu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CurriculoComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    PortfolioComponent,
    ServicesComponent,
    SkillsComponent,
    DialogbbComponent,
    DialogCaixaComponent,
    DialogCamaraComponent,
    DialogCniComponent,
    DialogPfComponent,
    DialogRfbComponent,
    DialogSicoobComponent,
    DialogStfComponent,
    DialogTcuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'apldeveloper-cf797',
        appId: '1:1093185570159:web:2542b497c148da77e3549a',
        databaseURL:
          'https://apldeveloper-cf797-default-rtdb.europe-west1.firebasedatabase.app',
        storageBucket: 'apldeveloper-cf797.appspot.com',
        //locationId: 'europe-west',
        apiKey: 'AIzaSyClTJft5csa8U0KbNQjknUk0Q6OJ5Z408Y',
        authDomain: 'apldeveloper-cf797.firebaseapp.com',
        messagingSenderId: '1093185570159',
        measurementId: 'G-D0Y42TXP33',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
