import { useQuery } from "react-query";
import fetchRepos from "@/utils/fetchRepos";
import UserRepositoryCard from "../userRepositoryCard";
import CardSkeleton from "../GridSkeleton";
import useStore from "@/app/store";
import { Repo } from "@/types";

function UserRepositories() {
  const { username, shouldRefetch, setShouldRefetch } = useStore(
    (state) => state
  );

  const { data, isLoading, isRefetching, refetch } = useQuery(
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

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 mx-auto gap-6 container max-w-7xl px-6">
      {data?.map((repo: Repo) => (
        <UserRepositoryCard key={repo.id} repo={repo} />
      ))}
    </section>
  );
}

export default UserRepositories;
