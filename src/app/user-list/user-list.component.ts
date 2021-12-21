import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface VkUser {

  first_name: string
  id: number
  last_name: string
  can_access_closed: boolean
  is_closed: boolean
  photo_100: string
  can_invite_to_chats: boolean
  track_code: string
}

export interface VkResponse {
  count: number
  items: VkUser[]
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  vkUserList: VkUser[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<VkResponse>('/api/friends')
      .subscribe(response => {
        this.vkUserList = response.items
      })
  }
}
