import { Card, CardBody, CardFooter, Code, Skeleton } from "@nextui-org/react";

function CardSkeleton() {
  return (
    <section>
      <Card>
        <CardBody className="flex flex-col gap-4">
          <Skeleton className="rounded-lg max-w-xs">
            <div className="h-6 rounded-lg bg-default-300 "></div>
          </Skeleton>

          <Skeleton className="rounded-lg">
            <div className="h-8 rounded-lg bg-default-300"></div>
          </Skeleton>

          <div className="flex w-full gap-2">
            <Skeleton className="rounded-lg">
              <div className="h-8 w-24 rounded-lg bg-default-300"></div>
            </Skeleton>

            <Skeleton className="rounded-lg">
              <div className="h-8 w-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-between">
          <Skeleton className="rounded-lg">
            <div className="h-8 w-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-8 w-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        </CardFooter>
      </Card>
    </section>
  );
}

export default CardSkeleton;
