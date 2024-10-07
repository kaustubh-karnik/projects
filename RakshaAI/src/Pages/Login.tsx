import Navbar from '../components/Navbarr'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center w-full h-auto mt-16'>
                <div className='h-[400px] flex justify-center rounded-lg w-[1000px]'>
                    <div className=' h-full w-full border-r-2 rounded-lg border-[1px] border-surface'></div>
                    <div className='h-full w-full rounded-lg border-[1px] border-surface p-10 pl-[25px] '>
                        <img src="ConvoVision2.png" alt="" width='75px' height='75px' className='right-12' />
                        <div className='mt-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/ >
                        </div>
                        <div className="mb-6 mt-5">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                            <p className="text-red-500 text-xs italic">Enter Username and Password.</p>
                        </div>
                        <ul>
                            <li className='rounded-lg bg-[#39462C] text-white h-[35px] flex justify-center items-center text-lg w-[90px]'>
                                <Link to='/Chat'>Login</Link>
                            </li>
                        </ul>
                        
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