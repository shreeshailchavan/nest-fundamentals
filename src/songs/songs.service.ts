import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs = <any[]>[];

  getAllSongs() {
    return this.songs;
  }

  getSong(id){
    return this.songs[this.songs.findIndex(s => s.id === id)]
  }

  createSong(song){
    const index = this.songs.length+1;
    song.id = index;
    this.songs.push(song)
    return this.songs;
  }

  deleteSong(id){
    const index = this.songs.findIndex(s => s.id == id)
    this.songs.splice(index,1)
    return this.songs
  }

  updateSong(song:CreateSongDTO,id){
    const index = this.songs.findIndex(s => s.id == id)
    this.songs[index] = song
    this.songs[index].id = id;
    return this.songs
  }
}



