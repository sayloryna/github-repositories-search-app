export interface RepositoryDto {
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

export interface Repository extends Omit<RepositoryDto, "pushed_at"> {
  pushed_at: Date;
}
