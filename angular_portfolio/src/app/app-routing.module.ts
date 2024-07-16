import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
