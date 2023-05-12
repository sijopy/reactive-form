import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select/select.component';
import { BooleanComponent } from './boolean/boolean.component';
import { EaxamoleComponent } from './eaxamole/eaxamole.component';
import {MatInputModule} from '@angular/material/input';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PageService } from './page.service';
@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    BooleanComponent,
    EaxamoleComponent,
    AngularMaterialComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
