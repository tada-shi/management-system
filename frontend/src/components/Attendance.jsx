import React from 'react';
import { getToken } from '../Utils/Common';

export default function Attendance() {
    const accessToken = getToken();
    const postAttendance = e => {
        e.preventDefault();
        try {
            const response = fetch("http://localhost:4000/api/attendance",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${accessToken}`
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
    
                
            <div className="attendance">
                <input 
                onClick={postAttendance}
                type="button" value="attendance" />
            </div>
        )
}

