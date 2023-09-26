import { Conversation } from './classes/Conversation.js';

export const getMessages = (data) => {
  data.forEach((message, index) => {
    const conversation = new Conversation(container);
    const container = document.querySelector('main.conversation');
    setTimeout(() => {
      let text = document.createElement('div');
      text.innerHTML = `<div class="message message--${message.side}">
              <div class="message__text">${message.text}
              </div>
          </div>`;
      container.appendChild(text);
    }, 500 * index);
  });
};

class Conversation {
  constructor(container) {
    this.container = container;
  }
}
