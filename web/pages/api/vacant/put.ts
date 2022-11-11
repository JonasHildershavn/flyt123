import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../../models/azure-vacant'
import { AzureClient } from '../../../clients/azure-client'

export default async function getVacantById(req: NextApiRequest, res: NextApiResponse) {
    const client = new AzureClient;
    const vacant = JSON.parse(req.body) as AzureVacant
    const result = await client.upsertEntity(vacant)
    res.json(result)
}