import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <main className="min-h-screen bg-[#0F1115] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-[#CCFF00]">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 rounded-xl bg-[#CCFF00] px-6 py-3 font-semibold text-black transition hover:bg-[#b8e600]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Notfound;
