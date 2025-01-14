import { GetServerSideProps, NextPage } from 'next';

import { User } from '../../types/users';

interface UserPageProps {
  user: User | null;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const { id } = context.params!;
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const user: User = await res.json();

    return { props: { user } };
  } catch (error) {
    console.error(error);
    return { props: { user: null } };
  }
};

const UserPage: NextPage<UserPageProps> = ({ user }) => {
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserPage;
