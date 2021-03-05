import { Injectable } from '@angular/core';
import { SongItem } from './song-item';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SongRepositoryService {

  public SongItems: SongItem[] = [];

  private SongItemsSubject = new BehaviorSubject<SongItem[]>(this.SongItems);

  public SongItems$ = this.SongItemsSubject.asObservable();

  constructor() {
  }

  private nextId = 1;

  public addSong(title: string, artist: string, sminutes: string, feature:string, date:string) {
    const newSongs = [new SongItem(this.nextId++, title,artist,sminutes,feature,date), ...this.SongItems];
    this.SongItems = newSongs;
    this.SongItemsSubject.next(newSongs);
  }

  public remove(id: number) {
    const newSongs = this.SongItems.filter(Song => Song.id != id);
    this.SongItems = newSongs;
    this.SongItemsSubject.next(newSongs);
  }

  public find(id: number) {
    return this.SongItems.find(Song => Song.id === id);
  }
}
