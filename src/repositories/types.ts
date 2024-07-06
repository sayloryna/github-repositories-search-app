export interface Repository {
  id: number;
  name: string;
  html_url: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
  language: string;
  description: string;
  pushed_at: string;
}
