import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

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

        {/* ---------- NEW BUTTONS SECTION ---------- */}
        <div className="mt-8 flex gap-6">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>

          <Button size="large" shape="rounded-full">
            Large Round Button
          </Button>
        </div>
        {/* ----------------------------------------- */}
      </main>
    </>
  );
}
