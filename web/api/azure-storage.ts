import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import { AzureVacant } from '../models/azure-vacant';

export class Storage {
    private account: string = "flytstorageaccount";
    private accountKey: string = "RGGRqAcHULge99e0yqjA4d1NWXYUoR9HlIpLNJMKZm1QKXPyZDYQmSGpecBlA0UVgtV2Zr1Wk07A+ASt6bl91w==";
    private tableName: string = "vacants";
    private credential: AzureNamedKeyCredential;
    private client: TableClient;

    constructor() {
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

    async upsertVacant() {
        return;
    }
}