import {Routes} from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import{HomeComponent} from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';



export const ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'cartelera',component:CarteleraComponent},
    {path:'cartelera/**',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full', redirectTo:'home'}
    
]