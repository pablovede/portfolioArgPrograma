import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { BannerComponent } from 'src/app/componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from 'src/app/componentes/experiencia/experiencia.component';
import { EducacionPComponent } from 'src/app/componentes/educacionP/educacionP.component';
import { ExperienciaIndividualComponent } from 'src/app/componentes/experiencia-individual/experiencia-individual.component';
import { EducacionHComponent } from 'src/app/componentes/educacionH/educacionH.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { SkillIndividualComponent } from 'src/app/componentes/skill-individual/skill-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionPComponent,
    ExperienciaIndividualComponent,
    EducacionHComponent,
    SkillsComponent,
    SkillIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
