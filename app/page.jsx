import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense
        fallback={
          <div className="flex min-h-75 items-center justify-center">
            <span className="loading loading-spinner text-success w-16 h-16 bg-[#CCFF00]"></span>
          </div>
        }
      >
        <Library />
      </Suspense>
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
        </>
      </Head>
    </>
  );
}
