import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function UserPage() {
  const router = useRouter();
  const { data: user, isLoading } = useSWR(
    router.query.id ? `/api/users/${router.query.id}` : null
  );

  if (!user || isLoading) {
    return 'Loading...';
  }

  const { first_name, last_name, avatar } = user;

  return (
    <>
      <h1>User Page</h1>
      <p>This is the detail page</p>
      {!user ? (
        'No users yet.'
      ) : (
        <section>
          <h2>
            {first_name} {last_name}
          </h2>
          <Image
            src={avatar}
            alt={`${first_name} ${last_name}`}
            width={300}
            height={300}
          />
        </section>
      )}
    </>
  );
}
