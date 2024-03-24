import React from 'react';
import {useStateContext} from "../../contexts/ContextProvider.jsx";
export default function Notification() {
    const { notification} = useStateContext();
    return (
        <>
        {notification &&
            <div className="notification"> {notification} </div>
        }
        </>
    )
}
