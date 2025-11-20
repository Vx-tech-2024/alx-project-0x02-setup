import Head from "next/head";
import Header from "@/components/layout/Header";
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project 02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center gap-6 py-12 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>

        {/* Open Modal Button */}
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add New Post
        </button>

        {/* Display all added posts */}
        <div className="flex flex-col items-center gap-4 w-full mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
}
