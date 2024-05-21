import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  private chatData: any;
  private readonly chatGPTUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD3odXbQFR_BBs2hWBASOiavxhjc3Gyq4M';

  constructor(private http: HttpClient) {
    this.loadChatData().subscribe(data => {
      this.chatData = data;
    });
  }

  loadChatData(): Observable<any> {
    return this.http.get('assets/chat-data.json');
  }

  async getResponse(message: string): Promise<string> {
    if (!this.chatData) {
      return "I'm sorry, I don't have enough data right now. Please try again later.";
    }

    const intents = this.chatData.intents;
    for (let intent of intents) {
      for (let pattern of intent.patterns) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(message)) {
          const responses = intent.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // If no suitable response found in the JSON data, delegate to ChatGPT
    return await this.generateResponseWithChatGPT(message);
  }

  async generateResponseWithChatGPT(message: string): Promise<string> {
    try {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace YOUR_ACCESS_TOKEN with your actual access token
      });
      const requestOptions = { headers: headers };
      const response = await this.http.post<any>(this.chatGPTUrl, { contents: [{ parts: [{ text: message }] }] }, requestOptions).toPromise();
      return response.data[0].text.trim(); // Assuming the response from ChatGPT API contains a 'text' field
    } catch (error) {
      console.error("Error occurred while fetching response from ChatGPT:", error);
      return "Sorry, I'm still learning. Can you please rephrase your question?";
    }
  }
}
