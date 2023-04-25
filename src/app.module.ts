import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
