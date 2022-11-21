import { AzureVacant } from "../../models/azure-vacant";
import { useForm } from "react-hook-form";
import {useState} from 'react';
import SaveFeedback from "../save-feedback/save-feedback";
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface VacantFormProps {
    existingVacant: AzureVacant
}

const VacantForm: React.FC<VacantFormProps> = ({
    existingVacant,
}) => {
    
    const [showSaveFeedback, setShowSaveFeedback] = useState(false);
    const [availableTill, setAvailableTill] = useState(existingVacant.availableTill);
    
    const parsedVacant = JSON.parse(JSON.stringify(existingVacant).replace(/null/g, '""'))
    
    const { register, handleSubmit} = useForm({
        defaultValues: parsedVacant
    });

    function onSubmit(data: AzureVacant) {
        data.availableTill = availableTill
        const postData = async () => {
            const url = "/api/vacant/put";
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
            });
            return response
        }

        postData().then((response) => {
            if (response.ok) {
                setShowSaveFeedback(current => !current);

            } else {
                console.log("RESP NOT OK", response)
            }
        });
        
    }

    return (
        <FormGroup className="vacant-form">

            <label>Vis for ledere<Switch defaultChecked={existingVacant.showInAdmin} {...register("showInAdmin")}/></label>

            <TextField disabled label="Email" variant="standard" {...register("rowKey")}/>

            <TextField disabled label="Navn" variant="standard" {...register("name")}/>

            <TextField label="Rolle" variant="standard" {...register("role")}/>

            <TextField label="Foretrukket aktivitet" variant="standard" {...register("prefActivity")}/>

            <TextField label="Foretrukket prosjekt" variant="standard" {...register("prefProject")}/>

            <TextField label="Motivasjon" variant="standard" {...register("motivation")}/>
            
            <TextField label="Kapasitet" variant="standard" {...register("capacity", {min: 0, max: 100})}/>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                        label="Ledig til"
                        value={availableTill}
                        onChange={(newValue) => {
                            if (newValue == null) newValue = "";
                            setAvailableTill(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
           
            <Button onClick={handleSubmit(onSubmit)} variant="contained">Lagre</Button>

            {showSaveFeedback && (
                <SaveFeedback setShowSaveFeedback={setShowSaveFeedback}/>
            )}
        </FormGroup>
        
    )
}

export default VacantForm;