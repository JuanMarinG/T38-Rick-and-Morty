import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AddCharacterComponent } from "./add-character/add-character.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'characters',
        component: CharactersComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'info/:id',
        component: InfoComponent
    }, {
        path: 'add',
        component: AddCharacterComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'user',
        component: BoardUserComponent
    }, {
        path: 'mod',
        component: BoardModeratorComponent
    }, {
        path: 'admin',
        component: BoardAdminComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
