// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../models/azure-vacant'
import { Storage } from './azure-storage'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AzureVacant>
) {
  const storage = new Storage();
  // console.log('REQ=',req.toString())
  // console.log('RES=',req.json())
  

  return res.status(200).json(data);
}
