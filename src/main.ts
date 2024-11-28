import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://reports.utpc.or.tz', // Allow only your frontend origin
    credentials: true, // Allow cookies or authentication headers
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Financial Reporting API')
    .setDescription('API documentation for Financial Reporting System')
    .setVersion('1.0')
    .addBearerAuth() // Add authentication if needed
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

