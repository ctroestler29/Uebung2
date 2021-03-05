import { Component, OnInit } from '@angular/core';
import {SongItem} from '../services/song-item';
import {SongRepositoryService} from '../services/song-repository.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {

  newSongItemTitle = '';
  newSongItemArtist= '';
  newSongItemMinutes= '';
  newSongItemFeature= '';
  newSongItemDate= '';

  constructor(private SongRepository: SongRepositoryService) {
    
   }

  ngOnInit(): void {
  }

  public addSong()
  {
    if(this.newSongItemTitle&&this.newSongItemArtist&&this.newSongItemDate&&this.newSongItemMinutes)
    {
      if(this.newSongItemFeature=='')
      {
        this.newSongItemFeature='-';
      }
      this.SongRepository.addSong(this.newSongItemTitle,this.newSongItemArtist, this.newSongItemMinutes, this.newSongItemFeature, this.newSongItemDate);
      this.newSongItemTitle='';
      this.newSongItemArtist='';
      this.newSongItemMinutes='';
      this.newSongItemFeature='';
      this.newSongItemDate='';
    }
  }


  

}
