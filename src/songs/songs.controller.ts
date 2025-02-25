import { Controller, Get, Put, Post, Delete, Body, Param, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private readonly songsService:SongsService){}

    @Get()
    findAll(){
        try{
        return this.songsService.getAllSongs();
        }
        catch(error){
            console.log("this is error : "+error);
        throw new HttpException('unauthorized access',HttpStatus.FORBIDDEN)
        }
    }

    @Get(':id')
    find(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number){
        console.log(typeof(id));
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
