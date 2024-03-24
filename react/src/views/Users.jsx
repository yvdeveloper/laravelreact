import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

import {
  Datatable,
  initTE,
} from "tw-elements";
export default function Users() {
  initTE({ Datatable })
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification, setActive} = useStateContext()

  const columns = [
    { label: 'ID', field: 'id' },
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Created Date', field: 'created_at' },
    { label: 'Actions', field: 'action', sort:false },
  ];

  useEffect(() => {
    setActive("Users");
        
    getUsers();
    console.log(document.getElementById('datatable'));


    const asyncTable = new Datatable(
      document.getElementById('datatable'),
      { columns, },
      { loading: true }
    );
    axiosClient.get('/users')
      .then(({ data }) => {
        asyncTable.update(
          {
            rows: data.data.map(u => ({
              ...u,
              id:u.id,
              name: u.name,
              email:u.email,
              created_at: u.created_at,
              action: `<button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              Edit
            </button>`

            })),
          },
          { loading: false }
        );
        //setLoading(false)
        //setUsers(data.data)
      })
      .catch(() => {
        //setLoading(false)
     })

    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        asyncTable.update(
          {
            rows: data.map((user) => ({
              ...user,
              address: `${user.address.city}, ${user.address.street}`,
              company: user.company.name,
            })),
          },
          { loading: false }
        );
    });*/
  }, [])

  const onDeleteClick = user => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }
    axiosClient.delete(`/users/${user.id}`)
      .then(() => {
        setNotification('User was successfully deleted')
        getUsers()
      })
  }

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }
  
  return (
    <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-3">
      <div id="datatable"></div>
    </div>
  )
  /*return (

    <div>

      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Users</h1>
        <Link className="btn-add" to="/users/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
          </thead>
          {loading &&
            <tbody>
            <tr>
              <td colSpan="5" class="text-center">
                Loading...
              </td>
            </tr>
            </tbody>
          }
          {!loading &&
            <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created_at}</td>
                <td>
                  <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link>
                  &nbsp;
                  <button className="btn-delete" onClick={ev => onDeleteClick(u)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  )*/
}