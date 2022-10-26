import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../../models/azure-vacant'
import { AzureStorage } from '../azure-storage'

export default async function getAllVacants(req: NextApiRequest, res: NextApiResponse<AzureVacant>) {
    const storage = new AzureStorage()

    if (req.method === 'PUT') {
        const vacant = await storage.getVacantByMail(req.query.id as string) as AzureVacant
        res.json(vacant);

    } else if (req.method === 'PUT') {
        const vacant: AzureVacant = {
            partitionKey: "",
            rowKey: "testbruker@mail.no",
            name: req.body.name,
            stilling: "Utvikler",
            capacity: req.body.capacity,
            freeTill: "2023-01-01",
            etag: ""
        }
        console.log(vacant)

        const respone = await fetch('http://localhost:3000/api/vacant/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: 'New Name', capacity: 0}) 
        });

        storage.upsertVacant(vacant)

    }
    
}