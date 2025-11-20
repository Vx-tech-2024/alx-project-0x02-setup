import Head from "next/head";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts | ALX Project 02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Posts Page</h1>
        <p className="mt-4 text-gray-700">This is the posts page.</p>
      </main>
    </>
  );
}
