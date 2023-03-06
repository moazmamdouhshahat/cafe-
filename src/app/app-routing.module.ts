import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PorductDatComponent } from './porduct-dat/porduct-dat.component';
import { PorductDetailsComponent } from './porduct-details/porduct-details.component';


const routes: Routes = [


{  path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'porduct-details',component:PorductDetailsComponent},
{path:'abour-us',component:AboutUsComponent},
{path:'contact',component:ContactComponent},
{path:'blog',component:BlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
