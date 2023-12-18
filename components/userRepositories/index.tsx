import { useQuery } from "react-query";
import fetchRepos from "@/utils/fetchRepos";
import UserRepositoryCard from "../userRepositoryCard";
import CardSkeleton from "../GridSkeleton";
import useStore from "@/app/store";
import { Repo } from "@/types";
import { GitCommit, GitPullRequest } from "@phosphor-icons/react";

function UserRepositories() {
  const { username, shouldRefetch, setShouldRefetch } = useStore(
    (state) => state
  );

  const { data, isLoading, isRefetching, isSuccess, refetch } = useQuery(
    "repos",
    () => fetchRepos(username),
    {
      enabled: false, // disable fetching data on mount
      onSuccess: () => setShouldRefetch(false),
      onError: () => setShouldRefetch(false),
    }
  );

  if (shouldRefetch) {
    refetch();
  }

  if (isLoading || isRefetching) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mx-auto gap-6 container max-w-7xl px-6">
        {[...new Array(6)].map((el, index) => (
          <CardSkeleton key={`index-${index}`} />
        ))}
      </section>
    );
  }

  if (isSuccess) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mx-auto gap-6 container max-w-7xl px-6">
        {data?.map((repo: Repo) => (
          <UserRepositoryCard key={repo.id} repo={repo} />
        ))}
      </section>
    );
  }

  if (!username) {
    return (
      <section className="my-24 mx-auto gap-2 container flex flex-col items-center justify-center max-w-7xl px-6">
        <div className="h-40 w-40 bg-gray-50 rounded-full flex items-center justify-center">
          <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
            <GitPullRequest className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <h3 className="text-xl font-medium">Nothing Found!</h3>
        <p className="text-sm text-center">
          Start by searching a github user by their github username.
        </p>
      </section>
    );
  }
}

export default UserRepositories;
