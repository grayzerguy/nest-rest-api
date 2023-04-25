// This is the entry point of the application
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
//bootstrap is a function that returns a promise that resolves to an instance of the Nest application
bootstrap();
