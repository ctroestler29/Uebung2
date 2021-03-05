import { Component, OnInit } from '@angular/core';
import {SongItem} from '../services/song-item';
import {SongRepositoryService} from '../services/song-repository.service';
import {BehaviorSubject, Observable} from 'rxjs';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  SongItems$: Observable<SongItem[]>;

  constructor(private SongRepository: SongRepositoryService) {
    this.SongItems$ = SongRepository.SongItems$;
   }

  ngOnInit(): void {
  }

  public remove(Song: SongItem){
    this.SongRepository.remove(Song.id);
  }

}
