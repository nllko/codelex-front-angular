import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { PlannerSimpleComponent } from './components/planner/planner-simple/planner-simple.component';
import { PlannerWithCheckboxesComponent } from './components/planner/planner-with-checkboxes/planner-with-checkboxes.component';
import { PlannerWithCheckboxesAndFilterComponent } from './components/planner/planner-with-checkboxes-and-filter/planner-with-checkboxes-and-filter.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import {HttpClientModule} from "@angular/common/http";
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleTableComponent } from './components/people/people-table/people-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlannerWithProgressComponent } from './components/planner/planner-with-progress/planner-with-progress.component';
import { PlannerWithDeleteComponent } from './components/planner/planner-with-delete/planner-with-delete.component';
import { PlannerWithEditComponent } from './components/planner/planner-with-edit/planner-with-edit.component';
import { PlannerWithPriorityComponent } from './components/planner/planner-with-priority/planner-with-priority.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    HeaderComponent,
    PlannerComponent,
    PlannerSimpleComponent,
    PlannerWithCheckboxesComponent,
    PlannerWithCheckboxesAndFilterComponent,
    PlannerWithProgressComponent,
    FormsComponent,
    LoginFormComponent,
    SignUpComponent,
    CharactersComponent,
    CharacterCardComponent,
    CharacterComponent,
    PeopleComponent,
    PeopleTableComponent,
    PlannerWithDeleteComponent,
    PlannerWithEditComponent,
    PlannerWithPriorityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
