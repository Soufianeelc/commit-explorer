export interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  license: {
    name: string | null;
  } | null;
  stargazers_count: number;
}
