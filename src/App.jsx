//imports from components
import Nav from './components/Nav'
import Footer from './components/Footer'

//import from react-router-dom
import {Outlet} from 'react-router-dom'

//import from css
import './css/App.css'

function App() {
  

  return (
    <>
    <div className='app'>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
