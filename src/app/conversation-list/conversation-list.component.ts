import { Component, OnInit } from '@angular/core';
import { UserMessage } from '../models/user-message';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent implements OnInit {
  constructor() {}
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

  onEnter() {}

  ngOnInit(): void {}
}
