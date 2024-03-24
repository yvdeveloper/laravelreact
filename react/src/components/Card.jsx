import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
    margin-bottom: 1rem;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 120px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const TextContent = styled.div``;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`;
function bgcolorChange(props) {
    return props.isdragging
        ? "lightgreen"
        : props.isDraggable
            ? props.isBacklog
                ? "#F2D7D5"
                : "#DCDCDC"
            : props.isBacklog
                ? "#F2D7D5"
                : "#FFF";
}



export default function Card({ task, index }) {
    
    const {
        setNotification,
        setBacklog,
        setInReview,
        setIncomplete,
        setCompleted
    } = useStateContext();

    const getTasks = () => {
        axiosClient.get('/tasks')
        .then(({ data }) => {
            setBacklog(data.data.filter((task) => task.status === 0));
            setInReview(data.data.filter((task) => task.status === 1));
            setIncomplete(data.data.filter((task) => task.status === 2));
            setCompleted(data.data.filter((task) => task.status === 3));
        })
        .catch(() => {
        })
    }

    const removeTask = _task => {
        axiosClient.delete(`/tasks/${_task.id}`)
          .then(() => {
            setNotification(`Task #${_task.id} was successfully deleted`)
            getTasks()
        })
    }

    const getTask = _task => {
        axiosClient.get(`/tasks/${_task.id}`)
        .then(({data}) => {
            Object.keys(data).map((n,i) => {
                console.log(n,i);
               // document.getElementById(`i_${n}`).value = i;
            });
          //setLoading(false)
          //setUser(data)
        })
        .catch(() => {
        })
    }

    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isdragging={snapshot.isdragging}
                >
                    <div style={{position:"relative"}}>
                        <div style={{float:"left"}}>
                        <small>
                            #{task.id} - {task.title}
                            {"  "}
                        </small>
                        </div>
                        <div style={{float:"right"}} >
                            
                            <div
        className="relative"
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">
        <a
          className="mr-4 text-secondary-500 transition duration-200 hover:text-secondary-400 hover:ease-in-out focus:text-secondary-400 disabled:text-black/30 motion-reduce:transition-none"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          <span className="[&>svg]:w-5">
          <FaRegEdit/>
          </span>
          
        </a>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref>
          <li>
            <a onClick={()=> getTask(task)}
                data-te-toggle="modal"
                data-te-target="#exampleModalCenter"    
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Edit</a>
          </li>
          <li>
            <a onClick={()=> removeTask(task)}
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Remove</a>
          </li>
          
        </ul>
      </div>
                        </div>
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "center", padding: 2 }}
                    >
                        <TextContent>{task.description}</TextContent>
                    </div>
                    <Icons>
                        <div>
                            Created By {task.created_by}
                        </div>
                    </Icons>
                    {provided.placeholder}
                </Container>
            )}
        </Draggable>
        
    );
}