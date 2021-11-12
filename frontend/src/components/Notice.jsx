import React, { useEffect, useState } from 'react';
import './Notice.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getToken } from '../Utils/Common';

export default function Notice() {
    const token = getToken();
    const [Notices, setNotices] = useState([]);
    useEffect(() => 
        {
            axios.get('http://localhost:4000/api/notice',{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }).then(res=>{
                setNotices(res.data);
            }).catch(err=>console.log(err));
        }
    , [token])
    return (
        <div className="notice">
            <h1>NOTICE</h1>

        <div className="notice__container">
            <ul className="notice_lists">
            {Notices.map(notice=> {
            const {notice_id, notice_headline, notice_file} = notice;
            return (
                <li key={notice_id} className="notice__box">
                    <Link 
                    to={notice_file}
                    className='notice__headline'
                    >
                    {notice_headline}
                    </Link>
                </li>
           )
        })}
            </ul>
        </div>
        </div>
    )
}
