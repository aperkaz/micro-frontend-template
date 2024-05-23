import { eventBus } from '../services/eventBus'

declare global {
  interface Window { hostMethods: any; }
}

window.hostMethods = window.hostMethods || {};

// This is the base class for all sdk-objects
// It can and should be extended further with common methods 
export default class BaseModel {
  static instance() {
    return new this()
  }

  // TODO: Bind to available hostMethods
  get hostMethods() {
    // TODO: Implement something a long of this:
    // if (isInsideIframe) return retrieveParentHost().hostMethods
    //
    // For now, we just return the hostMethods
    return window.hostMethods
  }

  on(event: string, callback: any) {
    return eventBus.on(event, callback)
  }

  broadcast(event: string, callback: any) {
    return eventBus.broadcast(event, callback)
  }
}
