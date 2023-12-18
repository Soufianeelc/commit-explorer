import { Commit } from "@/types";
import convertDate from "@/utils/ConvertDate";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
} from "@nextui-org/react";
import { GitCommit, Calendar } from "@phosphor-icons/react/dist/ssr";

function CommitCard({ commit }: { commit: Commit }) {
  return (
    <Card className="border border-gray-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <GitCommit className="w-5 h-5" />
          <span className="font-medium">{commit.sha.substring(0, 7)}</span>
        </div>
      </CardHeader>
      <CardBody>
        {/* Commit Message */}
        <div className="flex flex-wrap items-center gap-2">
          <span>Commit Message:</span>
          <Code color="primary" className="text-sm">
            {commit.commit.message}
          </Code>
        </div>
        {/* Committer */}
        <div className="flex items-center gap-2">
          <span>Commiter:</span>
          <span>{commit.commit.committer.name}</span>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="text-sm">
            {convertDate(commit.commit.committer.date)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CommitCard;
