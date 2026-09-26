import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Library></Library>
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
