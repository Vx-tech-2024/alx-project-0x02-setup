import Head from "next/head";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project 02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">About Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the About page using the Next.js Pages Router.
        </p>
      </main>
    </>
  );
}
