import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { conversation } from './conversation-items';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent implements OnInit {
  @ViewChild('myScroll') myScroll!: ElementRef;
  conversation = conversation;
  message = '';
  id?: number;

  constructor(activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => (this.id = params['id']));
  }

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
    conversation.items.push(itemMessage);

    localStorage.setItem('myMessages', JSON.stringify(conversation.items));
  }

  ngOnInit(): void {
    const itemsString = localStorage.getItem('myMessages');
    if (itemsString) {
      conversation.items = JSON.parse(itemsString);
    }
  }
}
