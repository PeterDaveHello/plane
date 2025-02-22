import type {
  IIssueFilterOptions,
  IUserLite,
  IWorkspace,
  IWorkspaceLite,
  TIssueGroupByOptions,
  TIssueOrderByOptions,
  TIssueViewOptions,
} from "./";

export interface IProject {
  created_at: Date;
  created_by: string;
  cover_image: string | null;
  cycle_view: boolean;
  default_assignee: IUser | string | null;
  description: string;
  emoji: string | null;
  emoji_and_icon:
    | string
    | {
        name: string;
        color: string;
      }
    | null;
  estimate: string | null;
  icon_prop: {
    name: string;
    color: string;
  } | null;
  id: string;
  identifier: string;
  is_favorite: boolean;
  issue_views_view: boolean;
  module_view: boolean;
  name: string;
  network: number;
  page_view: boolean;
  project_lead: IUser | string | null;
  slug: string;
  total_cycles: number;
  total_members: number;
  total_modules: number;
  updated_at: Date;
  updated_by: string;
  workspace: IWorkspace | string;
  workspace_detail: IWorkspaceLite;
}

export interface IProjectLite {
  id: string;
  name: string;
  identifier: string;
}

export interface IFavoriteProject {
  created_at: Date;
  created_by: string;
  id: string;
  project: string;
  project_detail: IProject;
  updated_at: Date;
  updated_by: string;
  user: string;
  workspace: string;
}

type ProjectViewTheme = {
  issueView: TIssueViewOptions;
  groupByProperty: TIssueGroupByOptions;
  orderBy: TIssueOrderByOptions;
  calendarDateRange: string;
  filters: IIssueFilterOptions;
};

export interface IProjectMember {
  id: string;
  member: IUserLite;
  project: IProject;
  workspace: IWorkspace;
  comment: string;
  role: 5 | 10 | 15 | 20;

  view_props: ProjectViewTheme;
  default_props: ProjectViewTheme;

  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
}

export interface IProjectMemberInvitation {
  id: string;

  project: IProject;
  workspace: IWorkspace;

  email: string;
  accepted: boolean;
  token: string;
  message: string;
  responded_at: Date;
  role: 5 | 10 | 15 | 20;

  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
}

export interface IGithubRepository {
  id: string;
  full_name: string;
  html_url: string;
  url: string;
}

export interface GithubRepositoriesResponse {
  repositories: IGithubRepository[];
  total_count: number;
}
