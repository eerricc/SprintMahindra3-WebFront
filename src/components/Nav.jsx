//import from react-router-dom
import {Link} from 'react-router-dom'

//hook
import { useState } from 'react'

//import from css
import '../css/Nav.css'

const Nav =()=>{
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    return(
        <header className='nav-header'>
                <Link to='/' className='nav-title'>Fimtech</Link>
                <div className='nav-menu' onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>  
                </div>
                <ul className={`${menuOpen ? "open" : ""} nav-ul`}>
                    <li className='nav-list'><Link className='nav-link' to='/sobre'>Sobre</Link></li>
                    <li className='nav-list'><Link className='nav-link' to='/login'>Login</Link></li>
                </ul>
                          
        </header>
    )
}
export default Nav