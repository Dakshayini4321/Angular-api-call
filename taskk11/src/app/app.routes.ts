import { Routes } from '@angular/router';
import { AddeditComponent } from './user/userm/addedit/addedit.component';
import { DetailsComponent } from './user/userm/details/details.component';
import { ListComponent } from './user/userm/list/list.component';

export const routes: Routes = [
    {path: 'user/userm', redirectTo:'user/addedit', pathMatch: 'full'},
    {path:'user/userm/addedit', component:AddeditComponent},
    {path:'user/userm/details', component:DetailsComponent},
    {path:'user/userm/list', component:ListComponent}
];
