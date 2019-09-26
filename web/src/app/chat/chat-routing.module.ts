import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMainComponent } from './components/chat-main/chat-main.component';

const routes: Routes = [
  {
    path: '', component: ChatMainComponent, runGuardsAndResolvers: "always"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
