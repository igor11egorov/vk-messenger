import { Component, Input, OnInit } from '@angular/core';
import { VkMessages } from '../models/vk-messages';
import { VkOneMessage } from '../models/vk-one-message';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {
  @Input() data!: VkOneMessage;

  constructor() { }

  ngOnInit(): void { }
}
