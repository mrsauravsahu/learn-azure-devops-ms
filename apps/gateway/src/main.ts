import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { GATEWAY_PORT = 80 } = process.env;
  await app.listen(GATEWAY_PORT);
  console.log(`App running at: ${await app.getUrl()}`);
}

bootstrap();
