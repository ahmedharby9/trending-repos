import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import {ViewAllReposComponent} from "./view-all-repos/view-all-repos.component";
import {RepoCardComponent} from "./nested-shared/repo-card/repo-card.component";
import {ConciseNumberPipe} from "../../shared/pipes/concise-number.pipe";
import {DateAgoPipePipe} from "../../shared/pipes/date-ago-pipe.pipe";


@NgModule({
  declarations: [
    ViewAllReposComponent,
    RepoCardComponent,
    ConciseNumberPipe,
    DateAgoPipePipe
    ],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
