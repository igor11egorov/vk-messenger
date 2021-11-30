import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationListComponent } from './conversation-list/conversation-list.component';

const routes: Routes = [{ path: ':id', component: ConversationListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
