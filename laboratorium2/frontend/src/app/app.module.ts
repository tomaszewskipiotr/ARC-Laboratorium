import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddHatComponent} from './add-hat/add-hat.component';
import {ShowHatComponent} from './show-hat/show-hat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        AddHatComponent,
        ShowHatComponent,
        NavbarComponent,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule, HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
