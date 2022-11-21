import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../../models/azure-vacant'
import { AzureClient } from '../../../clients/azure-client'

export default async function getVacantById(req: NextApiRequest, res: NextApiResponse) {
    const client = new AzureClient;
    const rowKey = req.query.id as string
    const vacant = await client.getEntity("", rowKey) as AzureVacant
    res.json(vacant);
}