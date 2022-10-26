import { NextPage } from 'next'
import dotenv from "dotenv";


const Test: NextPage = ({
  
}) => {
    
    const key = process.env.NEXT_PUBLIC_Azure_StorageAccount_AccessKey
    return (
        <h1>key={key}</h1>
    )
}

export default Test