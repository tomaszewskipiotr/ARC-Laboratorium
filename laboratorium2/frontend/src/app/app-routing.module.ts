import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddHatComponent} from './add-hat/add-hat.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ShowHatComponent} from './show-hat/show-hat.component';


const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'add-hat', component: AddHatComponent},
    {path: 'show-hat', component: ShowHatComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
