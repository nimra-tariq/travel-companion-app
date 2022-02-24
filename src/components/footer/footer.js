import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css'

export default function Footer() {
    return <div className='bgFooter'>
        <div className='footerContainer container d-flex justify-content-between'>
            <div className='footer'><span>Designed and Developed by </span><span><a href="https://github.com/nimra-tariq">nimra-tariq</a></span></div>
            <div className='container-fluid iconContainer'>
                <a href="https://www.facebook.com/nimra.tariq.90260" className="nav-item nav-link"><FacebookIcon style={{ color: '#233dff' }} /></a>
                <a href="https://github.com/nimra-tariq" className="nav-item nav-link"><GitHubIcon style={{ color: '#233dff' }} /></a>
                <a href="https://www.linkedin.com/in/nimra-tariq-6784aa1b0/" className="nav-item nav-link"><LinkedInIcon style={{ color: '#233dff' }} /></a>
            </div>
            <div className='footer margin'><span><EmailIcon style={{ color: '#233dff' }} /></span><span>nimratariq899@gmail.com</span></div>
        </div>
    </div>
}