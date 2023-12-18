import { Button, Input } from "@nextui-org/react";
import React, { ChangeEvent, FormEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import useStore from "@/app/store";

function UserSearch() {
  const { username, setUsername, setShouldRefetch } = useStore(
    (state) => state
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (event.target.value) {
      params.set("username", event.target.value);
    } else {
      params.delete("username");
    }

    replace(`${pathname}?${params.toString()}`);
    setUsername(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShouldRefetch(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center container mx-auto gap-4 px-6 justify-center max-w-lg"
    >
      <Input
        type="text"
        placeholder="Enter a valid github username"
        onChange={handleChange}
        value={username}
        defaultValue={searchParams.get("username")?.toString()}
        size="sm"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">@</span>
          </div>
        }
        isRequired
      />
      <Button color="primary" size="lg" radius="sm" type="submit">
        Search
      </Button>
    </form>
  );
}

export default UserSearch;
