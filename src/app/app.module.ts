import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { BannerComponent } from 'src/app/componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaPComponent } from 'src/app/componentes/experienciaP/experienciaP.component';
import { EducacionPComponent } from 'src/app/componentes/educacionP/educacionP.component';
import { ExperienciaHComponent } from 'src/app/componentes/experienciaH/experienciaH.component';
import { EducacionHComponent } from 'src/app/componentes/educacionH/educacionH.component';
import { SkillsPComponent } from './componentes/skillsP/skillsP.component';
import { SkillsHComponent } from 'src/app/componentes/skillsH/skillsH.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaPComponent,
    EducacionPComponent,
    ExperienciaHComponent,
    EducacionHComponent,
    SkillsPComponent,
    SkillsHComponent
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
