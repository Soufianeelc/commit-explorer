import CommitCard from "@/components/commitCard";
import { Commit } from "@/types";
import { notFound } from "next/navigation";
notFound;

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function Page({ searchParams }: PageProps) {
  const commits: Commit[] = await fetch(
    `https://api.github.com/repos/${searchParams.username}/${searchParams.repo}/commits`
  )
    .then((res) => res.json())
    .catch((err) => notFound());

  return (
    <main className="container gap-4 mt-0 py-8 mx-auto max-w-7xl px-6 grid  ">
      {/* <div className="h-screen col-span-4 border-r border-gray-300">
        <h1 className="font-semibold mt-4">About the repository</h1>
      </div> */}
      {commits.map((commit: Commit) => (
        <CommitCard key={commit.sha} commit={commit} />
      ))}
    </main>
  );
}

export default Page;
