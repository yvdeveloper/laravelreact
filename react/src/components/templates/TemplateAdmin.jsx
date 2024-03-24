import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";
import {useEffect} from "react";
import { GrTasks } from "react-icons/gr";
import Sidebar from "../menu/Sidebar.jsx";
import Navbar from "../menu/Navbar.jsx";
import Notification from "../helper/Notification.jsx";

export default function TemplateAdmin() {
  const {user, token, setUser, setToken} = useStateContext();
  if (!token) {
    return <Navigate to="/login"/>
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data);
      })
  }, [])
  
  return (
    <div style={{backgroundColor:"#fafafa"}}>
      <Sidebar/>
      <div className="p-5 !pl-[260px] text-center" id="content">
          <Navbar/>
          <main className="grid grid-cols-12 gap-4">
            <Outlet/>
          </main>
        </div>
        <Notification/>
    </div>
  )

}