import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import axiosClient from "../axios-client.js";
import Column from "./Column.jsx";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import NewTask from "./menu/NewTask.jsx";
import { IoAddCircle } from "react-icons/io5";
import {
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Ripple,
    Input,
    Select,
    Validation,
    initTE,
} from "tw-elements";
import _Modal from "./elements/Modal.jsx";
export default function Board() {
    initTE({
        Offcanvas,
    Ripple,
    Input,
    Select,
    Validation, Modal, Collapse, Dropdown });
    const {
        setActive,
        setNotification,
        backlog,
        setBacklog,
        inReview,
        setInReview,
        incomplete,
        setIncomplete,
        completed,
        setCompleted
    } = useStateContext();
    //const [backlog, setBacklog] = useState([]);
    //const [inReview, setInReview] = useState([]);
    //const [incomplete, setIncomplete] = useState([]);
    //const [completed, setCompleted] = useState([]);
    
    useEffect(() => {
        setActive("Kanban");
        const new_task_form = document.getElementById('new_task_form');
        new_task_form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            const _task = {
                id: null,
                title: new_task_form[0].value,
                description: new_task_form[1].value,
                status: new_task_form[2].value,
                created_by: localStorage.getItem('user_id')
            };
            
            axiosClient.post('/tasks', _task)
            .then(() => {
                getTasks();
                document.getElementById('btn-offCanvas').click();
                setNotification('New task successfully created')
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    Object.keys(response.data.errors).map((n,i) => {
                        document.getElementById(`i_${n}`).setAttribute("data-te-validation-state","invalid")
                    });
                }
            })
        });
        getTasks();
        /*fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setCompleted(json.filter((task) => task.completed));
                setIncomplete(json.filter((task) => !task.completed));
            });*/

            
    }, []);


    /*removeTask.addEventListener("click", (ev) => {
        ev.preventDefault();
        console.log('hit');
    });*/


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

    const updateTask = (task, status) => {
        task.status = status;
        axiosClient.put(`/tasks/${task.id}`, task)
        .then((response) => {
            setNotification(`Task #${task.id} was successfully updated`)
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            //setErrors(response.data.errors)
          }
        })
    }
            
    const handleDragEnd = (result) => {
        
        const { destination, source, draggableId } = result;

        if (!destination || source.droppableId === destination.droppableId) return;
        deletePreviousState(source.droppableId, draggableId);

        const task = findItemById(draggableId, [...incomplete, ...completed, ...inReview, ...backlog]);

        setNewState(destination.droppableId, task);

    };

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "0":
                setBacklog(removeItemById(taskId, backlog));

                break;
            case "1":
                setInReview(removeItemById(taskId, inReview));
                break;
            case "2":
                setIncomplete(removeItemById(taskId, incomplete));
                break;
            case "3":
                setCompleted(removeItemById(taskId, completed));
                break;
        }

    }

    
    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "0":   // BACK LOG
                updatedTask = { ...task, completed: false };
                setBacklog([updatedTask, ...backlog]);
                updateTask(task, 0);
                
                break;
            case "1":  // TO GO
                updatedTask = { ...task, completed: false };
                setInReview([updatedTask, ...inReview]);
                updateTask(task, 1);
                
                break;
            case "2":  // In progress
                updatedTask = { ...task, completed: false };
                setIncomplete([updatedTask, ...incomplete]);
                updateTask(task, 2);
                
                break;
            case "3":  // DONE
                updatedTask = { ...task, completed: true };
                setCompleted([updatedTask, ...completed]);
                updateTask(task, 3);
                break;
        }
    }
    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }
    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }
    return (
        <>

    <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-3">
        <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-offcanvas-toggle
            data-te-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            <IoAddCircle/>
            &nbsp;New Task
        </button>
    </div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <Column title={"BACK LOG"} tasks={backlog} id={"0"} />
            <Column title={"READY TO DO"} tasks={inReview} id={"1"} />
            <Column title={"IN PROGRESS"} tasks={incomplete} id={"2"} />
            <Column title={"DONE"} tasks={completed} id={"3"} />
        </DragDropContext>
        <NewTask title="New Task"/>
        <_Modal />
        </>
    );
}