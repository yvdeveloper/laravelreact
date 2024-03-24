import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
    backlog:null,
    setBacklog: () => {},
    inReview:null,
    setInReview: () => {},
    incomplete:null,
    setIncomplete: () => {},
    completed:null,
    setCompleted: () => {}

})



export const ContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState();
    const [active, _setActive] = useState();
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [newTask, _setNewTask] = useState({});
    const [backlog, setBacklog] = useState([]);
    const [inReview, setInReview] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [completed, setCompleted] = useState([]);
    
    
    const setNewTask = (value) => {
        _setNewTask(value)
    }

    const setActive = (value) => {
        _setActive(value)
    }

    const setNotification = (message) => {
        _setNotification(message)
        setTimeout(()=>{
            _setNotification('')
        }, 5000)
    }

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else
        {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification,
            active,
            setActive,
            newTask,
            setNewTask,
            backlog,
            setBacklog,
            inReview,
            setInReview,
            incomplete,
            setIncomplete,
            completed,
            setCompleted
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
