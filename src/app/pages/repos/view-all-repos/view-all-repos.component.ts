import {Component, OnInit} from '@angular/core';
import {CallApisService} from "../../../shared/services/call-apis.service";
import {Repo} from "../nested-shared/models/repo";

@Component({
  selector: 'app-view-all-repos',
  templateUrl: './view-all-repos.component.html',
  styleUrls: ['./view-all-repos.component.scss']
})
export class ViewAllReposComponent implements OnInit {
  public reposList: Repo[];
  public listQuery: any;

  constructor(public callApi: CallApisService) {
    this.reposList = [];
    this.listQuery = {order: 'desc', page: 1, sort: 'stars', q: 'created:>2017-10-22'};
  }

  ngOnInit(): void {
    this.loadReposByPage();
  }

  loadReposByPage(page: number = 1): void {
    let queryString = '';
    const queryKeys = Object.keys(this.listQuery);
    for (const [index, key] of queryKeys.entries()) {
      queryString += key + '=' + this.listQuery[key] + (index < queryKeys.length-1 ? '&' : '');
    }
    this.callApi.getAllRepos(queryString).subscribe((res) => this.reposList = res.items);
  }

}
