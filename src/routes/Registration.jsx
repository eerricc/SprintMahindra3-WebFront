import {useParams,Link, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';

//import from css
import '../css/Registration.css'


const Registration=()=>{

    //hook useParams
    let {id} =useParams();
    //hook useState
    const [users,setUsers]= useState({
        id,
        user:'',
        password:'',
    });

    //hook useNavigate
     const navigate = useNavigate();

    //post/put variable
    let method ="post";
    if(id){
        method="put";
    }
   
    const handleChange=(e)=>{
        setUsers({...users, [e.target.name]: e.target.value});
    } 

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:5000/users/${id ? id:''}`,{
        method: method,
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(users),
        }).then(()=> {
            navigate("/login")
        });
    }

    //Hook useEffect

    useEffect(()=>{
        if(id) {
        fetch(`http://localhost:5000/users/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsers(data);
        });
    }
    },[id])


    return (
        <section className="registration-user">
                <h1 className='registration-title'>Registration Form</h1>
            <form className='registration-form' onSubmit={handleSubmit}>
                <label className='registration-label'>
                <input
                    type="text"
                    name="user"
                    placeholder="User"
                    className="registration-input"
                    value={users.user}
                    onChange={handleChange}
                />
                </label>

                <label className='registration-label'>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="registration-input"
                    value={users.password}
                    onChange={handleChange}
                />
                </label>

                <button type="submit" className='registration-submit-btn'>Register</button>
            </form>
        </section>
    )
}
export default Registration