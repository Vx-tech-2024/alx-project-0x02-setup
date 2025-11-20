import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users | ALX Project 02</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Users</h1>

        <div className="grid grid-cols-1 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
