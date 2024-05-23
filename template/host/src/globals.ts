type NotificationType = {
  message: string
}

const TEST__METHOD = async (payload: NotificationType) => {
  // For demo purposes this method has an artifical delay
  await new Promise((resolve) => setTimeout(resolve, 2000))
  window.alert(payload.message)
}


const notifications = {
  push: TEST__METHOD
}

export {
  notifications
}
