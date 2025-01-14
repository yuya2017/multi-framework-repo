import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';


interface User {
  id: string;
  name: string;
  email: string;
}


export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`https://api.example.com/users/${id}`);
    const user: User = await res.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export default function UserPage() {
  const user = useLoaderData<User>();
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
