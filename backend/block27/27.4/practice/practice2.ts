export default function progressNotification(message: string, notificationType: string): void {
  const types = ['Email', 'Phone', 'Console', 'SMS', 'Whatsapp'];
  if (types.includes(notificationType)) {
    console.log(`${notificationType}: ${message}`)
  } else {
    console.log('Notification type not available.')
  }
};

