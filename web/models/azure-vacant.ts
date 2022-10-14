export interface AzureVacant {
    partitionKey: string; // empty
    rowKey: string;      // rowKey (unik)
    name: string;    
    stilling: string;   // E.G. Utvikler, Designer, Salg osv.   
    capacity: number;   // Mellom 
    freeTill: Date;     // ISO-format: YYYY-MM-DD
    timestamp: Date;
}
