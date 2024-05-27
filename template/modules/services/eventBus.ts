type Callback = (...args: any[]) => void;

export class EventBus {
  private events: Record<string, Callback[]>;

  constructor() {
    this.events = {}
  }

  on(eventName: string, fn: Callback): () => void {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)

    return () => this.off(eventName, fn)
  }

  off(eventName: string, fn: Callback): void {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        listener => listener !== fn
      )
    }
  }

  broadcast(eventName: string, data: any): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }
}

const eventBus = new EventBus()

export { eventBus }
