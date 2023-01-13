import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className='app'>  
            <Sidebar/>
            <div className='page'>
                
                <Outlet />

            </div>
        </div>
    )
}

export default Layout