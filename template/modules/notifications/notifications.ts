import BaseModel from '../utils/BaseModel'

type Notification = {
  message: string
}

type NotificationEventNames = 'add' | 'remove'

class Notifications extends BaseModel {

  // Add a new notification to the list
  async push(payload: Notification) {
    try {
      await super.hostMethods.notifications.push(payload)
      this.broadcast('add', payload)
    } catch (error) {
      console.log('TODO: Call the error service', error)
    }
  }

  broadcast(event: NotificationEventNames, callback: unknown) {
    return super.broadcast(`notifications:${event}`, callback)
  }

  on(event: string, callback: unknown) {
    return super.on(`notifications:${event}`, callback)
  }
}

export const notifications = new Notifications()
