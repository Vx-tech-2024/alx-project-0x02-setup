import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center gap-6 py-12 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>

        <Card
          title="Welcome to the Home Page"
          content="This is a reusable Card component. You can pass any title and content you want."
        />

        <Card
          title="Dynamic Card Example"
          content="Each Card is rendered using props. This helps keep components clean and reusable."
        />

        <Card
          title="ALX Project 02"
          content="You're now implementing modular UI components using Next.js, TypeScript, and Tailwind CSS."
        />
      </main>
    </>
  );
}
