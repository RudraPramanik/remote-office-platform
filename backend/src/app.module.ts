import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { PostModules } from './modules/posts/post.module';

@Module({
  imports: [PostModule, PostModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
