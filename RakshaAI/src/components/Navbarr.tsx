'use client'
import { Link } from 'react-router-dom'

const Navbarr = () => {
    return(
        <div className="w-full h-[60px] flex flex-row justify-around  bg-[#0a1871] ">
            
            <div className='text-white flex flex-row font-semibold ml-[-750px]'>
                <img src={'/ConvoVision2.png'} alt="RakshAI" width='70px' className='ml-10 m-[8px] ' />
                <p className='m-[15px] mt-4'>ConversAI</p>
                <ul>
                    <li className='mr-10 ml-24 pt-4'><Link to='/Home'>Home</Link></li>
                </ul> 
                <ul>
                    <li className='mr-10 pt-4'><Link to='/About'>About</Link></li>
                </ul>
                <ul>
                    <li className='pt-4'><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>           
            
            {/* <div className='relative right-[-150px] cursor-pointer flex flex-row gap-4 p-2'>
                <p className='text-white pt-2'>Peter</p>
                <img
                    className="relative mt-1 z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                    alt="Profile"
                />
            </div> */}
        
      </div>

    )
}

export default Navbarr