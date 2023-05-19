import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // SWAGGER SETUP
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Truffle-NestJS-Box')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const config = app.get<ConfigService>(ConfigService);
  await app.listen(config.get('APP_PORT'), config.get('APP_HOST'));
}
bootstrap();
