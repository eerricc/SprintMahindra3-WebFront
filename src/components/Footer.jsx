import '../css/Footer.css'

//import from react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

const Footer =()=>{
    return (
        <footer className='footer'>
        <div className="container-footer">
            <div className="container-footer-btn">
                <div className="icon"><FaFacebookF /></div>
                <span>Facebook</span>
            </div>
            <div className="container-footer-btn">
                <div className="icon"><FaLinkedinIn /></div>
                <span>Linkedin</span>
            </div>
            <div className="container-footer-btn">
                <div className="icon"><FaInstagram /></div>
                <span>Instagram</span>
            </div>
            <div className="container-footer-btn">
                <div className="icon"><ImGithub /></div>
                <span>Github</span>
            </div>
            <div className="container-footer-btn">
                <div className="icon"><FaYoutube /></div>
                <span>Youtube</span>
            </div>
        </div>
        <div className="copyright-footer">
            <h4>Copyright &copy; fimtech</h4>
        </div>
    </footer>
    )
}
export default Footer