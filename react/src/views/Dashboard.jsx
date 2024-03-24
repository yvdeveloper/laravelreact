import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";


export default function Dashboard(){
    const {setActive} = useStateContext();
    useEffect(() => {
        setActive("Dashboard")
    
    }, []);
    


    return(
        <>
            <div>
                Dashboard
            </div>
        </>
    )
}