import Head from "next/head";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the Home page using the Next.js Pages Router.
        </p>
      </main>
    </>
  );
}
