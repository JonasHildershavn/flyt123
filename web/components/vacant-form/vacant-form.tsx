import { AzureVacant } from "../../models/azure-vacant";
import { Storage } from "../../pages/api/azure-storage"

import { useState } from "react";
import { useForm } from "react-hook-form";

interface VacantFormProps {
    storage: Storage
}

const VacantForm: React.FC<VacantFormProps> = ({
    storage,
    
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    async function onSubmit(data: any) {
        console.log("submitting=",data)
        const storage = new Storage()
        storage.upsertVacant()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Navn <input {...register("name")} />
            </label>
            <label>
                Mail <input {...register("mail", { required: true })}/>
            </label>
            <input type="submit"/>
        </form>
        
    )
}


export default VacantForm;
