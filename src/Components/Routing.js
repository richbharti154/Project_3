import {Route , Routes} from 'react-router-dom'
import PageTwo from '../Pages/PageTwo'
import Home from '../Pages/Home'
import PageThree from '../Pages/PageThree'


const Routing = () => {
    return (
        <div>
            <Routes>
            <Route path ='/' element={<Home/>} />    
            <Route path='/signup' element={<PageTwo />} />
            <Route path='/sigup' element={<PageThree />} />
            </Routes>
        </div>
    )
}

export default Routing