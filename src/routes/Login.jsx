//hooks
import {useRef, useState, useEffect} from 'react'

//import from react-router-dom
import {useNavigate, Link} from 'react-router-dom'

//import from css
import '../css/Login.css'

const Login =()=>{

    //hook useRef
    const user =useRef();
    const password =useRef();

    //hook useState
    const [users,setUsers]=useState([]);

    //hook useNavigate
    const navigate = useNavigate();

    function validate(){
        for(let i =0; i <users.length; i++){
            if(
                users[i].user ==user.current.value &&
                users[i].password == password.current.value
            ){
                return true;
            }
        }
    }

    const handleSubmit =(e)=>{
        //prevents page from loading before submit
        e.preventDefault();
        if(validate()){
            //authentication token 
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("user", user.current.value);
                sessionStorage.setItem("password", token);
                navigate("/dashboard")      
        }else{
            alert("user/password invalid")
        }
    }

    //hook useEffect

    useEffect(()=>{
        //json server url (API)
        fetch("http://localhost:5000/users/")
        //promise
        .then((res)=>{
            return res.json();
        })
        //setUsers receive data 
        .then((res)=>{
            setUsers(res);
        })
        //returns empty array
    },[])    

    return(
        <section className="login-user">
                <h1 className='login-title'>Login</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label className='login-label'>
                <input 
                    type="text" 
                    className="login-input" 
                    id="user"
                    placeholder="User"
                    ref={user}/>
                </label>
                
                <label className='login-label'>
                <input 
                    type="password" 
                    className="login-input" 
                    id="password"
                    placeholder="Password"
                    ref={password}/>
                </label>

                <button type="submit" className="login-submit-btn">Login</button>


            <ul className="login-utilities">
                <li className='login-list'>
                    <Link className='login-linktext'>Forgot the password?</Link>
                </li >

                <li className='login-list'>
                    <Link to="/registration" className='login-linktext'>Create an account</Link>
                </li>
            </ul>
            </form>
        </section>
    )

}
export default Login