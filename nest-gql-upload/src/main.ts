import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);

  console.log(`Nest server started at http://localhost:${port}`);
  console.log(`Access GraphQl playground  at http://localhost:${port}/graphql`);
}
bootstrap();
