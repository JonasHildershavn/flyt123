import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../models/azure-vacant'
import { AzureStorage } from './azure-storage'

export default async function getAllVacants(req: NextApiRequest, res: NextApiResponse<AzureVacant[]>) {
    if (req.method === 'GET') {
        const storage = new AzureStorage() 

        
        const vacants = await storage.getVacants() as AzureVacant[]
        console.log(vacants)
        res.json(vacants);
    }
    
}