import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewSongComponent} from './new-song/new-song.component';
import {SongListComponent} from './song-list/song-list.component';
import {DetailSongComponent} from './detail-song/detail-song.component';

const routes: Routes = [
  {path: '', component: SongListComponent},
  {path: 'new-song', component: NewSongComponent},
  {path: 'detail-song', component: DetailSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
