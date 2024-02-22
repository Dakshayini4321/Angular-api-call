import { Routes } from '@angular/router';
import { AddeditComponent } from './user/userm/addedit/addedit.component';
import { DetailsComponent } from './user/userm/details/details.component';
import { ListComponent } from './user/userm/list/list.component';
import { Component } from '@angular/core';
import { title } from 'process';


export const routes: Routes = [
    {path: 'user/userm', redirectTo:'user/addedit', pathMatch: 'full'},
    {path:'user/userm/addedit', component:AddeditComponent},
    {path:'user/userm/details', component:DetailsComponent},
    {path:'user/userm/list', component:ListComponent},
    {path: 'user/userm/list/:id/addedit', component: AddeditComponent, title:''},
    {path: 'user/userm/addedit/:res/list', component: ListComponent, title:''},
    {path: 'user/userm/list/:id/details', component: DetailsComponent, title:''},
    {path: 'user/userm/details/list', component: ListComponent, title:''}
];
