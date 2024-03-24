import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
    background-color: #fff;
    width:315px;
    height: 50vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
`;

const Title = styled.h3`
    padding: 8px;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    flex-grow: 1;
    min-height: 100px;
    margin-top:10px;
`;

const setClass = (id) => {
    let classReturn = "";
    switch (id) {
        case "0":
            classReturn = "bg-secondary";
            break;
        case "1":
            classReturn = "bg-primary";
            break;
        case "2":
            classReturn = "bg-warning";
            break;
        case "3":
            classReturn = "bg-success";
            break;
    }
    return classReturn;
}


export default function Column({ title, tasks, id }) {
    return (
        <div className="column col-span-12 md:col-span-6 lg:col-span-3">
            <div
            className={"block max-w-[100rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "+setClass(id)}>
                <div
                    className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
                    {title}
                </div>
                <div className="p-2">
                    <Droppable droppableId={id}>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isdraggingover={snapshot.isdraggingover}
                            >
                                {tasks.map((task, index) => (
                                    <Card key={index} index={index} task={task} />
                                ))}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </div>
            </div>
        </div>
    );
}