import React from "react";

function Footer() {
  return (
    <footer className="my-12 container mx-auto px-6">
      <p className="text-sm text-gray-500 sm:text-center text-center">
        ©2023 Developped by{" "}
        <a
          href="https://soufianeelc.me"
          className="hover:underline text-blue-500"
        >
          soufianeelc
        </a>{" "}
        Using Next.js, TailwindCSS and NextUI.
      </p>
    </footer>
  );
}

export default Footer;
