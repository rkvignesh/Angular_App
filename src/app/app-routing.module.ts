import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import {AuthGuard} from '../app/_gaurds/auth.guard';
import {NotFoundComponent} from '../app/errors/not-found/not-found.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [      
        {path:'members', component:MemberListComponent},
        {path:'member/:userName', component:MemberDetailComponent},  
        {path:'mem/edit', component:MemberEditComponent},
        {path:'lists', component:ListsComponent},
        {path:'messages', component:MessagesComponent} ,      
    ]
  },
  {path:'not-found', component:NotFoundComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
