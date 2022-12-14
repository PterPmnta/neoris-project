import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaseUnoModule } from './fase-uno/fase-uno.module';
import { FaseDosModule } from './fase-dos/fase-dos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    FaseUnoModule,
    FaseDosModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('PORT');
  }
}
