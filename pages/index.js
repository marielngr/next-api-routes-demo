import useSWR from 'swr';
import Link from 'next/link';

export default function IndexPage() {
  const { data: users, isLoading } = useSWR('/api/users');

  if (!users || isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <h1>Backend API Routes</h1>
      {!users.length ? (
        'No users yet.'
      ) : (
        <>
          <ul className="users-list">
            {users.map(({ id, first_name, last_name }) => (
              <li key={id}>
                <Link href={`/users/${id}`}>
                  {first_name} {last_name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
