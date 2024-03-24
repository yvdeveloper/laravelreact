import {Link} from 'react-router-dom';
import {useRef, useState} from 'react';
import axiosClient from '../axios-client.js';
import { useStateContext } from '../contexts/ContextProvider.jsx';

  import {  Input, Ripple, initTE } from "tw-elements";
  
export default function Index(){
    initTE({ Input, Ripple },true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext();


    return (
        <>
<div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Content */}
        <div className=" p-4">
          <p>Lovelight is an Australian & New Zealand company that designs custom window furnishings for beautiful spaces.</p>
        </div>
        <div className=" p-4">
          <p>We offer unmatched levels of quality and service to provide our customers beautifully furnished spaces they love.
            Our team draws on a wealth of industry experience to deliver a new standard of excellence – right from sourcing and selecting the best materials from around the world, through to product innovation and customer service delivery.
            At every stage, we listen to the needs of our customers, and tailor our services to perfectly fit their unique requirements.
            </p>
        </div>
        
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {/* Content */}
        <div className=" p-4">
          <p>Products</p>
        </div>
        
        
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Content */}
        <div className=" p-4">
        <img className="h-8 w-auto ml-10" src="../lovelight.svg"></img>
        </div>
        <div className=" p-4">
        <img className="h-8 w-auto ml-10" src="../lovelight.svg"></img>
        </div>
        <div className=" p-4">
          <p>We offer unmatched levels of quality and service to provide our customers beautifully furnished spaces they love.
            Our team draws on a wealth of industry experience to deliver a new standard of excellence – right from sourcing and selecting the best materials from around the world, through to product innovation and customer service delivery.
            At every stage, we listen to the needs of our customers, and tailor our services to perfectly fit their unique requirements.
            </p>
        </div>
        
    
      </div>
    </div>
        </>
    )
    
}