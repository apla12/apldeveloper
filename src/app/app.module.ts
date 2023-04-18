import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from './material.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
