import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProposalsModule } from './proposals/proposals.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { PageSeoModule } from './page-seo/page-seo.module';
import { PopupsModule } from './popups/popups.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    RedisModule,
    ProposalsModule,
    AuthModule,
    SettingsModule,
    PageSeoModule,
    PopupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
