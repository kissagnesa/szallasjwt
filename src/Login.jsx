import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login=()=>{
    const [userName, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');
    const navigate=useNavigate();

   
}