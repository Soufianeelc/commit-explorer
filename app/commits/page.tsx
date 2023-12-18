function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <pre>{searchParams.repo}</pre>;
}

export default Page;
