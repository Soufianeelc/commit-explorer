import axios from "axios";

function fetchRepos(username: string) {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.data);
}

export default fetchRepos;
