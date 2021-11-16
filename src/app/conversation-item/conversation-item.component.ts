import { Component, Input, OnInit } from '@angular/core';
import { UserMessage } from '../models/user-message';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {
  @Input() data!: UserMessage;

  constructor() {}

  ngOnInit(): void {}
}
