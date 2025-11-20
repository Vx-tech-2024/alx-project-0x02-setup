import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
      <p className="mt-4 text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
}
