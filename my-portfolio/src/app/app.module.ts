import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { InternshipComponent } from './components/internship/internship.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { LanguageComponent } from './components/language/language.component';
import { PositionComponent } from './components/position/position.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { TraitComponent } from './components/trait/trait.component';
import { IndustrialVisitComponent } from './components/industrial-visit/industrial-visit.component';
import { PaperComponent } from './components/paper/paper.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    AchievementComponent,
    SkillComponent,
    EducationComponent,
    ProjectComponent,
    InternshipComponent,
    HobbyComponent,
    LanguageComponent,
    PositionComponent,
    WorkshopComponent,
    TraitComponent,
    IndustrialVisitComponent,
    PaperComponent,
    ContactMeComponent,
    AboutMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
