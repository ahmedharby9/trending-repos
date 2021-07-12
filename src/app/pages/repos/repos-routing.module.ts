import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewAllReposComponent} from "./view-all-repos/view-all-repos.component";

const routes: Routes = [{
  path: '',
  component: ViewAllReposComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {
}
