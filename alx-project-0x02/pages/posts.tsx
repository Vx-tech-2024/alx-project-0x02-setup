import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await res.json();

      // Map API data to PostProps shape
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts | ALX Project 02</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Posts</h1>

        <div className="grid grid-cols-1 gap-6">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Loading posts...</p>
          )}
        </div>
      </main>
    </>
  );
}
