import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConversationListComponent } from "./conversation-list/conversation-list.component";


const routes: Routes = [
    {path: 'id1', component: ConversationListComponent},
    {path: 'id2', component: ConversationListComponent},
    {path: 'id3', component: ConversationListComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}