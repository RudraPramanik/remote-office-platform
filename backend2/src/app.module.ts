import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { OfficesModule } from './offices/offices.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [PostModule, AuthModule, UsersModule, CatsModule, OfficesModule, FeedbacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
