import { NextApiRequest, NextApiResponse } from 'next';

interface RegisterRequestBody {
  name: string;
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body as RegisterRequestBody;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
