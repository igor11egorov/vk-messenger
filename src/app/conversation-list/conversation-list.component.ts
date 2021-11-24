import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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

  sendMessage() {
    let element = document.getElementById("my-scroll");
    
    console.log('scrollTop', element!.scrollTop)
    console.log('scrollHeight', element!.scrollHeight)

    //element!.scrollTop = element!.scrollHeight;
    setInterval(()=> {element!.scrollTop = element!.scrollHeight}, 100)
    //element!.scrollIntoView({block: "end"});
    
    let itemMessage = {
      date: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
      body: this.message,
      mine: true,
    }

    

    this.conversationItems.push(itemMessage);
    
    let itemInLocalStorage = localStorage.setItem('myMessages', itemMessage.toString());
    console.log(itemInLocalStorage);
    console.log(itemMessage);
    this.message = '';
    console.log(localStorage.getItem('myMessages'));

    console.log('scrollTop', element!.scrollTop)
    console.log('scrollHeight', element!.scrollHeight)
    
  }


  ngOnInit(): void {

    localStorage.getItem('myMessages');
  }
}
