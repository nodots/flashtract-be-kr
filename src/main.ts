import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiPrefix = process.env.KANBAN_API_PREFIX || 'api';
  const apiVersion = process.env.KANBAN_API_VERSION || '1';
  const port = process.env.KANBAN_API_PORT || 3333;
  const host = process.env.KANBAN_API_HOST || 'localhost';
  const apiRoot = apiPrefix + '/' + apiVersion;
  app.setGlobalPrefix(apiRoot);

  await app.listen(port, () => {
    Logger.log('Listening at http://' + host + ':' + port + '/' + apiRoot);
  });

}
bootstrap();