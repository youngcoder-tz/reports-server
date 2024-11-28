import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { LogsModule } from './logs/logs.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { DatabaseConfig } from './config/database.config';
import { AppService } from './app.service';
import { ProtectedModule } from './protected/protected.module'; // Import the ProtectedModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(DatabaseConfig.uri, {
      dbName: DatabaseConfig.dbName,
    }),
    AuthModule,
    LogsModule,
    NotificationsModule,
    ReportsModule,
    UsersModule,
    ProtectedModule, // Add ProtectedModule here
  ],
  controllers: [AppController], // No need to add ProtectedController here anymore
  providers: [AppService],
})
export class AppModule {}
