import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    ConversationListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
