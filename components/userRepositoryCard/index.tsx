import { Card, CardBody, CardFooter, Code } from "@nextui-org/react";
import React from "react";
import { Scales, Star } from "@phosphor-icons/react";
import Link from "next/link";
import { Repo } from "@/types";

function UserRepositoryCard({ repo }: { repo: Repo }) {
  return (
    <Link
      href={{
        pathname: "/commits",
        query: { username: "soufianeelc", repo: repo.name },
      }}
      className="h-full"
    >
      <Card className="h-full">
        <CardBody className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg">{repo.name}</h2>

          <p>{repo.description}</p>

          <div className="flex w-full gap-2 flex-wrap">
            <Code color="secondary">{repo?.language}</Code>
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Scales className="w-5 h-5" />
            <span className="text-sm">{repo?.license?.name || "N/A"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Star weight="fill" className="text-yellow-500 w-5 h-5" />
            <span className="text-sm">{repo.stargazers_count}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default UserRepositoryCard;
