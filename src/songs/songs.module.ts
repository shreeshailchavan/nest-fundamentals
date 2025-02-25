import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

const mockingService = {
    findAll(){
        return {id:1,title:'Lara Bryan',artists:['Harris'],duration:'03:40',releaseDate:'2025-02-23'}
    }
}

@Module({
    controllers:[SongsController],
    providers:[SongsService,
        {
            provide:SongsService,
            useValue:mockingService
        }
    ]
})
export class SongsModule {
}
