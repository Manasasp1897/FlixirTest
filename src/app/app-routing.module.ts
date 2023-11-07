import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { CollegeComponent } from './college/college.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'course'
  },
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'college',
        component: CollegeComponent
      },
      {
        path: 'state',
        component: StateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
