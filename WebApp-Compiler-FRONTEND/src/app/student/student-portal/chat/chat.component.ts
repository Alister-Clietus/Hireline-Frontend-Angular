import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput: string = '';
  chatHistory: { sender: string, message: string }[] = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (this.userInput.trim()) {
      // Add user message to chat history
      this.chatHistory.push({ sender: 'user', message: this.userInput });

      // Send user input to the Flask backend
      this.http.post<any>('http://localhost:5099/chat', { message: this.userInput })
        .subscribe(response => {
          // Add bot response to chat history
          this.chatHistory.push({ sender: 'bot', message: response.response });
        });

      // Clear the input field
      this.userInput = '';
    }
  }
}