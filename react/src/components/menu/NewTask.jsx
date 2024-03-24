import React, { useState }from 'react'
/*import {
    Offcanvas,
    Ripple,
    Input,
    Select,
    Validation,
    initTE,
} from "tw-elements";
*/
import InputField from '../elements/InputField.jsx';
import SelectField from '../elements/SelectField.jsx';
import Button from '../elements/Button.jsx';

export default function NewTask({title}) {
    //initTE({ Validation, Input, Select, Offcanvas, Ripple }, true);
    const select_options = [
        "Backlog",
        "In Review",
        "In Progress",
        "Done",
    ];
  return (
    <div
    className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
    tabIndex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    data-te-offcanvas-init>
        <div className="flex items-center justify-between p-4">
            <h5
            className="mb-0 font-semibold leading-normal"
            id="offcanvasRightLabel">
            {title}
            </h5>
            <button id='btn-offCanvas'
            type="button"
            className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-offcanvas-dismiss>
            <span
                className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
            </button>
        </div>
        <div className="offcanvas-body flex-grow overflow-y-auto p-4">
            <form id="new_task_form" data-te-validation-init>
            
                <div className="relative mb-3" data-te-input-wrapper-init data-te-validate="input" data-te-validation-ruleset="isRequired">
                    <InputField id={"i_title"} name={"title"} title={"Title"} _placeholder={"Title"}/>
                </div>
                <div className="relative mb-3" data-te-input-wrapper-init  data-te-validate="input" data-te-validation-ruleset="isRequired">
                    <InputField id={"i_description"} name={"description"} title={"Description"} _placeholder={"Description"}/>
                </div>
                <div className="relative mb-3" >
                    <SelectField name={"status"} title={"Status"} _options={select_options}/>
                </div>
                <div className="relative mb-3" >
                    <Button id={"btnNewTask"} title={"Create"} _type="submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}
