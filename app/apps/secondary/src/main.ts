import { NestFactory } from '@nestjs/core';
import { SecondaryModule } from './secondary.module';

async function bootstrap() {
  const app = await NestFactory.create(SecondaryModule);

  const { SECONDARY_PORT = 80 } = process.env;
  await app.listen(SECONDARY_PORT);
  console.log(`App running at: ${await app.getUrl()}`);
}
bootstrap();
