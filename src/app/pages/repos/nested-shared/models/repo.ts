import {Owner} from "../../../../shared/models/owner";

export interface Repo {
  name?: string;
  description?: string;
  stargazers_count?: number;
  open_issues_count?: number;
  updated_at?: string;
  owner?: Owner;
}
