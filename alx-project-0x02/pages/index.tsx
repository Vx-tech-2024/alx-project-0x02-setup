import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 02</title>
        <meta name="description" content="Welcome to ALX Project 02" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to ALX Project 02 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This is your Next.js application successfully set up with TypeScript, ESLint, and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
