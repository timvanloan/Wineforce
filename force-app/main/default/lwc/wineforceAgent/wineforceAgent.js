import { LightningElement, track } from 'lwc';

export default class WineforceAgent extends LightningElement {
  @track messages = [
    { id: 'm1', text: "Hello! I'm your AI Salesforce WineForce Agent.", from: 'agent' },
    { id: 'm2', text: 'Would you like to discover what wine is right for you today?', from: 'agent' }
  ];

  draftMessage = '';

  handleInput = (event) => {
    this.draftMessage = event.target.value;
  };

  handleKeydown = (event) => {
    if (event.key === 'Enter') {
      this.handleSend();
    }
  };

  handleSend = () => {
    const text = (this.draftMessage || '').trim();
    if (!text) {
      return;
    }
    const newMsg = { id: `u-${Date.now()}`, text, from: 'user' };
    this.messages = [...this.messages, newMsg];
    this.draftMessage = '';
  };
}


