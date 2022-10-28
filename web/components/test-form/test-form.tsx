import React, { useState } from "react";
import { Storage } from '../../pages/api/azure-storage'

// const storage = new Storage()

const TestForm: React.FC =  ({}) => 
  {
  const [values, setValues] = useState({
    email: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const encodeString = JSON.stringify(values);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('event=', e)
    // try {
    //   await storage.upsertVacant()
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      Azure queue Storage
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter email"
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default TestForm;