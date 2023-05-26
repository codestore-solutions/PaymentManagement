import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { constants, swaggerConstants } from './assets/constants';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded } from 'express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(constants.APIS_PREFIX);
  app.enableCors();

  //Configuring Swagger
  const config = new DocumentBuilder()
  .setTitle(swaggerConstants.SWAGGER_TITLE)
  .setDescription(swaggerConstants.SWAGGER_DESCRIPTION)
  .setVersion(swaggerConstants.SWAGGER_VERSION)
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(constants.APIS_PREFIX, app, document);

  //Configuring PORT
  const configService = app.get(ConfigService);
  const port = configService.get('EXPRESS_PORT');
  app.useStaticAssets(join(__dirname, 'assets/images'));
  app.setViewEngine('hbs');

  try {
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
  } catch(err) {
    console.log(err);
  }
  await app.listen(port);
}
bootstrap();