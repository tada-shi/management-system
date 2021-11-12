import React from 'react';
import { useHistory} from 'react-router';
import { getUser, removeUserSession } from '../Utils/Common';

export default function Profile() {
    const history = useHistory();
    const user = getUser();
    const handleLogout = () => {
        removeUserSession();
        history.push('/');
    }
    return (
        <div className="profile">
            welcome {user.resident_name}!
            <div>
            <input type="button" value="logout"
            onClick={handleLogout}
            />
            </div>
        </div>
    )
}
