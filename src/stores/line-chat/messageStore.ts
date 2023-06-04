
import { defineStore } from "pinia";
import type { Message } from "../models/line-chat/message";
import { v4 as uuidv4 } from 'uuid';

interface State {
  isLoading: boolean;
  messages: Message[];
}

export const useMessageStore = defineStore({
  id: 'messageStore',
  state: (): State => {
    return {
      isLoading: false,
      messages: [],
    };
  },
  getters: {},
  actions: {
    initMessage(): void {
      this.isLoading = true;
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge1', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'b', message: 'fuga1', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge2', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge3', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge3', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge3', createdAt: new Date()})
      this.messages.push({id: uuidv4(), userId: 'a', message: 'hoge3', createdAt: new Date()})
      this.isLoading = false;
    },
    fetchMessage(): void {

    },
    postMessage(userId: string, message: string): void {
      const newMessage: Message = {
        id: uuidv4(),
        userId: userId,
        message: message,
        createdAt: new Date(),
      }
      this.messages.push(newMessage);
    }
  }
})