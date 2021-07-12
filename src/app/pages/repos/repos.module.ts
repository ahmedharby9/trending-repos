import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import {ViewAllReposComponent} from "./view-all-repos/view-all-repos.component";
import {RepoCardComponent} from "./nested-shared/repo-card/repo-card.component";


@NgModule({
  declarations: [
    ViewAllReposComponent,
    RepoCardComponent
    ],
  imports: [
    CommonModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
