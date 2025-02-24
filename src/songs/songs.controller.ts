import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private readonly songsService:SongsService){}

    @Get()
    findAll(){
        return this.songsService.getAllSongs();
    }

    @Get(':id')
    find(@Param('id') id:string){
        return this.songsService.getSong(id);
    }

    @Post()
    create(@Body() song:CreateSongDTO){
        return this.songsService.createSong(song)
    }

    @Put(":id")
    update(@Body() song:CreateSongDTO,@Param('id') id:string){

        return this.songsService.updateSong(song,id);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.songsService.deleteSong(id)
    }


}
