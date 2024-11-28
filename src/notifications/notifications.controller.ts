import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './schema/notification.schema';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async createNotification(@Body() notificationData: Partial<Notification>): Promise<Notification> {
    return await this.notificationsService.createNotification(notificationData);
  }

  @Get('user/:userId')
  async getNotificationsByUser(@Param('userId') userId: string): Promise<Notification[]> {
    return await this.notificationsService.getNotificationsByUser(userId);
  }

  @Patch(':id/read')
  async markAsRead(@Param('id') id: string): Promise<Notification> {
    return await this.notificationsService.markAsRead(id);
  }

  @Delete(':id')
  async deleteNotification(@Param('id') id: string): Promise<void> {
    return await this.notificationsService.deleteNotification(id);
  }
}
