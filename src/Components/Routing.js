import {Route , Routes} from 'react-router-dom'
import PageTwo from '../Pages/PageTwo'
import Home from '../Pages/Home'
import PageThree from '../Pages/PageThree'
import Mainscreeenpage from '../Pages/Mainscreenpage'
import UserProfile from './UserProfile/UserProfile'
import ClientProfile from './ClientProfile/Post'


const Routing = () => {
    return (
        <div>
            <Routes>
            <Route path ='/' element={<Home/>} />    
            <Route path='/signup' element={<PageTwo />} />
            <Route path='/sigup' element={<PageThree />} />
            <Route path='/main' element={<Mainscreeenpage />} />
            <Route path='/profile' element={<UserProfile/>} />
            <Route path='/post' element={<ClientProfile />} />
            </Routes>
        </div>
    )
}

export default Routing