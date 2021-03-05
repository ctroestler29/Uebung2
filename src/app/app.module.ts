import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { ServiceModule } from './services/service.module';
import { FormsModule } from '@angular/forms';
import { NewSongComponent } from './new-song/new-song.component';
import { DetailSongComponent } from './detail-song/detail-song.component';
import {SongRepositoryService} from './services/song-repository.service';
@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    NewSongComponent,
    DetailSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule.forRoot(),
    FormsModule
  ],
  providers: [SongRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
