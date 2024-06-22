import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
