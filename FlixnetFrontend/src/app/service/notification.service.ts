// notification.service.ts
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private hubConnection!: HubConnection;

  startConnection(): void {
    this.hubConnection = new HubConnectionBuilder()
        .withUrl('https://localhost:7294/NotificationHub') // Update with the backend URL
        .build();

    this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err));
}

public addNotificationListener(callback: (notification: any) => void): void {
    this.hubConnection.on('ReceiveLikeNotification', callback);
  }
}