import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import { AzureVacant } from '../models/azure-vacant';

export class Storage {
    private account: string = "flytstorageaccount";
    private accountKey: string;

    private tableName: string = "vacants";
    private credential: AzureNamedKeyCredential;
    private client: TableClient;

    constructor() {
        if (process.env.Azure_StorageAccount_AccessKey === undefined) {
            console.log("Could not retrieve Azure_StorageAccount_AccessKey: ")
        }
        this.accountKey = process.env.Azure_StorageAccount_AccessKey as string
        this.credential = new AzureNamedKeyCredential(this.account, this.accountKey);
        this.client = new TableClient(`https://${this.account}.table.core.windows.net`, this.tableName, this.credential);
        
    }

    async getVacants(): Promise<AzureVacant[]> {
        const vacantsIter = this.client.listEntities()
        let vacants: AzureVacant[] = []
        for await (const vacant of vacantsIter) {
            vacants.push(vacant)
        }

        return vacants
    }

    async upsertVacant(vacant: AzureVacant) {
        await this.client.updateEntity(vacant)
        return;
    }
}