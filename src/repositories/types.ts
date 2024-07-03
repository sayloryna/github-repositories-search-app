export interface Repository {
  id: number;
  name: string;
  html_url: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
  laguage: string;
  status?: number;
}
