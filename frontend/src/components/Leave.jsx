import React, {useState} from 'react';
import { getToken } from '../Utils/Common';

export default function Leave() {
    const [Reason, setReason] = useState("");
    const [Address, setAddress] = useState("");
    const [Leave, setLeave] = useState("");
    const [Arrival, setArrival] = useState("");

    const handleSubmit = e =>{
        const accessToken = getToken()
        e.preventDefault();
        try {
            const body = {Reason, Address, Leave, Arrival};
            const response = fetch("http://localhost:4000/api/leave",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
            });
            console.log(body);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="leave">
            <div className="leave__container">
                <div className="leave__field">
                    <input onChange={e => setReason(e.target.value)}
                    type="text" name="_reason" 
                    id="_reason" placeholder="REASON" />
                </div>
                <div className="leave__field">
                    <input onChange={e => setAddress(e.target.value)}
                    type="text" name="_address" 
                    id="_address" placeholder="ADDRESS"/>
                </div>
                <div className="leave__field">
                    <input onChange={e => setLeave(e.target.value)}
                    type="text" name="_leave" 
                    id="_leave" placeholder="LEAVE DATE" />
                </div>
                <div className="leave__field">
                    <input onChange={e => setArrival(e.target.value)}
                    type="text" name="_arrival" 
                    id="_arrival" placeholder="ARRIVAL DATE" />
                </div>
                <div className="leave__btn">
                    <button 
                    onClick={handleSubmit}
                    type="submit">
                    SUBMIT
                    </button>
                </div>
            </div>            
        </div>
    )
}
