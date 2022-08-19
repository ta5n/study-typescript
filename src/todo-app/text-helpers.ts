export const print = (message: string) => log(message, new Date());

export const log = (message: string, timestamp: Date) => console.log(`${timestamp.toString()}: ${message}`);
