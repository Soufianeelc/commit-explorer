import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="container mx-auto flex items-center sticky top-0 justify-between px-6 py-2 bg-white/20 backdrop-blur-lg z-[99] border-b border-gray-200">
      <Link href="/">
        <Image src="/logo.svg" width={50} height={50} alt="Commit Explorer" />
      </Link>

      <div className="flex gap-2 items-center">
        <a
          href="http://github.com/soufianeelc/commit-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="w-6 h-6 hover:text-blue-600" />
        </a>
      </div>
    </header>
  );
}
