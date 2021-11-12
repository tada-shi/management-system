import React, { useState } from 'react'
import { getToken } from '../Utils/Common';

export default function Complain() {
    const accessToken = getToken();
    const [Reason, setReason] = useState('');
    console.log(Reason);
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const body = {Reason};
            const response = fetch("http://localhost:4000/api/complain",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="complain">
            <input 
            onChange={e=> setReason(e.target.value)}
            type="text" name="reason" 
            id="complain__reason" />
            <button
            onClick={handleSubmit}
            className="complain__submitBtn"
            >SUBMIT</button>
        </div>
    )
}
