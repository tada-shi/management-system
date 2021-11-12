import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

export default function Login(props) {
    const history = useHistory();
    const [Error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    let [Enrollment_no, setEnrollment_no] = useState('');
    let [Password, setPassword] = useState('');

    const handleSubmit = () => {
        axios.post("http://localhost:4000/api/users/login",{
        Enrollment_no : Enrollment_no,
        Password : Password
        }).then(response => {
            const {accessToken} = response.data;
            axios.get("http://localhost:4000/api/profile",{
                headers: {
                    'Authorization' : `Bearer ${accessToken}`
                }
            }).then(res => {
                console.log(accessToken);
                const user =  res.data[0];
                setUserSession(response.data.accessToken, user);
                history.push("/profile");
            })
            .catch(err => {return err});
            setLoading(false);
            // console.log(accessToken);
            // console.log(user);
        })
        .catch(error => {
            setLoading(false);
            setError("Something went wrong please try again later");
        })
    }
    return (
        <div className="login">
            Login 
            <br/>
            <br/>
            <div className="login__fields">
                <div className="login__username">
                    <p>Enrollment_no</p>
                    <input 
                    type="text" name="enrollment_no" id="username" 
                    onChange={e=> setEnrollment_no(e.target.value)}
                    />
                </div>
                <br/>
                <div className="login__password">
                    <p>Password</p>
                    <input 
                    type="password" name="password" id="password" 
                    onChange={e=> setPassword(e.target.value)}
                    />
                </div>
                <br/>
                {Error && <p className="error" style={{color:"red"}}>{Error}</p>}
                <br/>

                <input type="button" 
                value={Loading?"Loading":"Login"}
                disabled={Loading}
                onClick={handleSubmit}
                />
            </div>
        </div>
    )
}
