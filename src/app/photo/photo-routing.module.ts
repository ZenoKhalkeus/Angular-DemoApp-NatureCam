import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CurrentPhotoComponent } from './current-photo/current-photo.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'photos',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':photoId',
        component: CurrentPhotoComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoRoutingModule {}