import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import initialLogo from '../../assets/images/my-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope, 
    faHome, 
    faUser, 
} from '@fortawesome/free-solid-svg-icons'
import { 
    faLinkedin,
    faGithub,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={initialLogo} alt='logo' />  
        </Link>
        <h1>victoria mota</h1>

        <nav>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                to='/'>

                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='about-link' to='/about'>

                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='contact-link' 
                to='/contact'>

                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/victoria-mota-531625244/' 
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer' 
                    href='https://github.com/v1ct0r14m' 
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                    target='_blank' 
                    rel='noreferrer' 
                    href='https://www.instagram.com/seniorcitizendiscount/' 
                >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar