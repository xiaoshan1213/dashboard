import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { DialComponent } from './dashboard/dial/dial.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: RootComponent, children: [
        {path: '', component: DialComponent}
    ]}
];

export const routing = RouterModule.forRoot(routes);