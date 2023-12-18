"use client";
import UserSearch from "@/components/searchForm";
import UserRepositories from "@/components/userRepositories";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto my-12">
      <div className="flex flex-col gap-4  mt-8 items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Who are you looking for today?
        </h1>
        <UserSearch />
      </div>
      <UserRepositories />
    </main>
  );
}
