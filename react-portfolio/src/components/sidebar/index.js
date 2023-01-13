import './index.scss'
import initialLogo from '../../assets/images/my-logo.png'


const Sidebar = () => (
    <div className='nav-bar'>
        <link className='logo' to='/'>
            <img src={initialLogo} alt='logo' />

        </link>
    </div>
)

export default Sidebar