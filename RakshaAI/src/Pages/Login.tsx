import Navbar from '../components/Navbarr'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center w-full h-auto mt-16'>
                <div className='h-[400px] flex justify-center rounded-lg w-[1000px] bg-red-400'>
                    <div className=' h-full w-full'></div>
                    <div className='h-full w-full m-10'>
                        <img src="logo-white.png" alt="" width='100px' height='100px' />
                    </div>
                </div>
            </div>
            



            {/* <ul>
                <li>
                    <Link to='/Chat'> Click to Open Chat</ Link>
                </li>
            </ul> */}
            
        </div>
    )
}


export default Login