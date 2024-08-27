'use client'

const Navbar = () => {
    return(
        <div className="w-full h-[60px] flex flex-row justify-around bg-black ">
            
            <div className='text-white flex flex-row font-semibold ml-[-200px]'>
                <img src={'/logo-white.png'} alt="RakshAI" width='150px' className='ml-10 pt-1 ' /> 
                <div className='mr-10 ml-24 pt-4'>Home</div>
                <div className='mr-10 pt-4'>About</div>
                <div className='pt-4'>Contact</div>
            </div>           
            
            <div className='relative right-[-150px] cursor-pointer flex flex-row gap-4 p-2'>
                <p className='text-white pt-2'>Peter</p>
                <img
                    className="relative mt-1 z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                    alt="Profile"
                />
            </div>
        
      </div>

    )
}

export default Navbar