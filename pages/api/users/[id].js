import { users } from '@/lib/data';

export default function handler(request, response) {
  if (request.method === 'GET') {
    const user = users.find((user) => user.id === Number(request.query.id));
    if (!user) {
      response.status(404).json({ message: 'User not found' });
      return;
    }
    response.status(200).json(user);
    return;
  }
  response.status(405).json({ message: 'Method not allowed' });
}
