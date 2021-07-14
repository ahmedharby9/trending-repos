import {Component, Input, OnInit} from '@angular/core';
import {Repo} from "../models/repo";

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input() info: Repo = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
