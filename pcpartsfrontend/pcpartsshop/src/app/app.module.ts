import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { PanelModule } from "primeng/panel";
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from "primeng/dropdown";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import { RegisterComponent } from './components/register/register.component';
import {DividerModule} from "primeng/divider";
import {FloatLabelModule} from "primeng/floatlabel";
import { ProductspageComponent } from './components/productspage/productspage.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {DockModule} from "primeng/dock";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductspageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        DropdownModule,
        DividerModule,
        FloatLabelModule,
        RadioButtonModule,
        DockModule,
        CardModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }