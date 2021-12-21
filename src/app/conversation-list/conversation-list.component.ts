import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserMessage } from '../models/user-message';
import { defaultConversation } from './conversation-items';
import { HttpClient } from '@angular/common/http';
import { VkOneMessage } from '../models/vk-one-message';
import { VkMessages } from '../models/vk-messages';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent implements OnInit {
  @ViewChild('myScroll') myScroll!: ElementRef;

  vkMessagesList: VkOneMessage[] = []
  conversationItems: UserMessage[] = [];
  message = '';
  id?: number;

  constructor(activateRoute: ActivatedRoute, private http: HttpClient) {

    
    activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.http.get<VkMessages>(`api/messages/${this.id}`)
      .subscribe(response => {
        this.vkMessagesList = response.items
      })
    });
  }

  // conversationItems: UserMessage[] = [];
  // message = '';
  // id?: number;

  // constructor(activateRoute: ActivatedRoute) {
  //   activateRoute.params.subscribe((params) => {
  //     this.id = params['id'];
  //     const itemsString = localStorage.getItem('id' + this.id);
  //     if (itemsString) {
  //       this.conversationItems = JSON.parse(itemsString);
  //     } else {
  //       this.conversationItems = [...defaultConversation];
  //     }
  //   });
  // }

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

    localStorage.setItem(
      'id' + this.id,
      JSON.stringify(this.conversationItems)
    );
  }

  ngOnInit(): void { }
}
