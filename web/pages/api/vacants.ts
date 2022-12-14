import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../models/azure-vacant'
import { AzureClient } from '../../clients/azure-client'

export default async function getAllVacants(req: NextApiRequest, res: NextApiResponse<AzureVacant[]>) {
    const client = new AzureClient()
    const vacantsIter = client.listEntities()
    let vacants: AzureVacant[] = []
    for await (const vacant of vacantsIter) {
        vacants.push(vacant as AzureVacant)
    }
    res.json(vacants);
}