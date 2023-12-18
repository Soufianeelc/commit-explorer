export interface Commit {
  sha: string;
  commit: {
    message: string;
    committer: {
      name: string;
      date: string;
    };
  };
}
