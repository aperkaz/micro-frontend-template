/**
 * Shared module between host & remotes for communications
 */

type Topics = 'fizzbuzz'

export const subscribe = (topic: Topics, callback: () => void) =>  {
    console.log(`Mock subscribe => [${topic}] callback: ${callback.name}`)
}

export const publish = (topic: Topics, message: string) =>  {
    console.log(`Mock publish => [${topic}] message: ${message}`)
}