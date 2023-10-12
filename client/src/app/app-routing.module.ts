import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [      //điều hướng sang các chức năng
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'lists', component: ListComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'}, // nếu người dùng ko thao tác chính xác những chức năng trên thì sẽ quay về home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
