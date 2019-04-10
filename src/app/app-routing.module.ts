import { ReviewsComponent } from './profile/secondRowGrid/reviews/reviews.component';
import { FollowersComponent } from './profile/secondRowGrid/followers/followers.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab1Component } from './tab1/tab1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'followers',
        component: FollowersComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
      }
    ]
  },
  {
    path: 'details',
    component: DetailsComponent,
    children: [
      {
        path: 'password',
        component: Tab1Component
      },
      {
        path: 'name',
        component: Tab2Component
      }
    ]
  },
  {
    path: '', redirectTo: '/profile/followers', pathMatch: 'full'
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
