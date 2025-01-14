import { GetServerSideProps, NextPage } from 'next';

import { User } from '../../types/users';

interface UserPageProps {
  user: User | null;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const { id } = context.params!;
  const protocol = context.req.headers['x-forwarded-proto'] ? (context.req.headers['x-forwarded-proto'] as string) : 'http';
  const host = context.req.headers.host;

  try {
    const res = await fetch(`${protocol}://${host}/api/users/${id}`);
    const user: User = await res.json();

    return { props: { user: user, host: host } };
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
