// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { User } from '../../../types/users';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  res.status(200).json({ id: '1', name: "John Doe", email: "john@example.com" });
}
