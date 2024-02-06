import { users } from '@/lib/data';

export default function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json(users);
    return;
  }
  response.status(405).json({ message: 'Method not allowed' });
}
