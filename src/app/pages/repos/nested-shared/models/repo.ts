import {Owner} from "../../../../shared/models/owner";

export interface Repo {
  name?: string;
  description?: string;
  stargazers_count?: number;
  open_issues_count?: number;
  owner: Owner;
}
