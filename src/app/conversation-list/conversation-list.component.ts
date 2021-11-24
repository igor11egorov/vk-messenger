import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserMessage } from '../models/user-message';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent implements OnInit {
  @ViewChild('myScroll') myScroll!: ElementRef;
  message = '';
  conversationItems: UserMessage[] = [
    {
      date: '23:20',
      body: 'Hello, Igor',
      mine: false,
    },
    {
      date: '23:20',
      body: 'How are you?',
      mine: false,
    },
    {
      date: '23:20',
      body: 'Hello, Olya!',
      mine: true,
    },
    {
      date: '23:20',
      body: "I'm fine, thx",
      mine: true,
    },
    {
      date: '23:20',
      body: 'How are you?',
      mine: true,
    },
    {
      date: '23:20',
      body: 'Same',
      mine: false,
    },
    {
      date: '23:20',
      body: 'Have you a carrot?',
      mine: false,
    },
    {
      date: '23:20',
      body: 'Yes, I have a few',
      mine: true,
    },
    {
      date: '23:20',
      body: 'Why do you need it?',
      mine: true,
    },
    {
      date: '23:20',
      body: 'Cannot say',
      mine: false,
    },
  ];

  constructor() {}

  sendMessage() {
    setTimeout(() => {
      const element = this.myScroll.nativeElement;
      element!.scrollTop = element!.scrollHeight;
    });

    let itemMessage = {
      date: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
      body: this.message,
      mine: true,
    };

    this.message = '';
    this.conversationItems.push(itemMessage);

    localStorage.setItem('myMessages', JSON.stringify(this.conversationItems));
  }

  ngOnInit(): void {
    const itemsString = localStorage.getItem('myMessages');
    if (itemsString) {
      this.conversationItems = JSON.parse(itemsString);
    }
  }
}
