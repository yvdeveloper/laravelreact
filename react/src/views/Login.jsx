import {Link} from 'react-router-dom';
import {useRef, useState} from 'react';
import axiosClient from '../axios-client.js';
import { useStateContext } from '../contexts/ContextProvider';

  import {  Input, Ripple, initTE } from "tw-elements";
  
export default function Login(){
    initTE({ Input, Ripple },true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault()


        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        setErrors(null)

        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('user_id', data.user.id)

        })
        .catch(err => {
            console.log(err);
            const response = err.response;
            if(response && response.status == 422)
            {
                if(response.data.errors)
                {
                    setErrors(response.data.errors)
                }
                else
                {
                    setErrors({
                        email: [response.data.message]
                    })
                }

            }
        })
    }

    return (
        <>
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={onSubmit}>
                        {errors && <div className="alert">
                                {Object.keys(errors).map(key=>(
                                    <p key={key}>{errors[key][0]}</p>
                                ))}    
                            </div>
                            }
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input ref={emailRef}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3"
                            placeholder="Email address" />
                            <label
                            htmlFor="exampleFormControlInput3"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email address
                            </label>
                        </div>
                
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input ref={passwordRef}
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput33"
                            placeholder="Password" />
                            <label
                            htmlFor="exampleFormControlInput33"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Password
                            </label>
                        </div>
                
                        <button
                            type="submit"
                            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Sign in
                        </button>

                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don't have an account?
                            <Link className="text-danger ml-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"  to="/signup">Create an account</Link>
                        </p>
                
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
    /*return(
        <>
            <div classNameName="login-signup-form animated fadeInDown">
                <div classNameName="form">
                    <form onSubmit={onSubmit}>
                        <h1 classNameName='title'>Login to your account</h1>
                        {errors && <div classNameName='alert'>
                            {Object.keys(errors).map(key=>(
                                <p key={key}>{errors[key][0]}</p>
                            ))}    
                        </div>
                        }
                        <input ref={emailRef} type="email" placeholder="Email"/>
                        <input ref={passwordRef} type="password" placeholder="Password"/>
                        <button classNameName="btn btn-block">Login</button>
                        <p classNameName="message">
                            Not Registered? <Link to="/signup">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )*/
}