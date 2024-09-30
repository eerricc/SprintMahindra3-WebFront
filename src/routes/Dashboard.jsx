import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    
    //hook useNavigate
    const navigate = useNavigate();

    const handleLogout=()=>{
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Saindo....")
        navigate("/")

    }
    
    return(
        <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>
        </button>
        </>
    )
}
export default Dashboard