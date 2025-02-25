import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { METHODS } from 'http';
import { consumers } from 'stream';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {

    // option1
    // consumer.applug(LoggerMiddleware).forRoutes('songs)
    // option2
      consumer.apply(LoggerMiddleware).forRoutes({path:'songs' , method : RequestMethod.POST})
    // opption3
      // consumer.apply(LoggerMiddleware).forRoutes(SongsController)


  }
}
