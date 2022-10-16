import { TableEntityResult } from "@azure/data-tables";

export interface AzureVacant extends TableEntityResult<Record<string, unknown>> {
    //partitionKey: string; // empty
    //rowKey: string;      // rowKey (unik)
    name: string;    
    stilling: string;   // E.G. Utvikler, Designer, Salg osv.   
    capacity: number;   // Mellom 
    freeTill: string;     // ISO-format: YYYY-MM-DD
    //timestamp: string;
}
