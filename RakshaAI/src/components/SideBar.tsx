"use Client"

const SideBar = () => {
    return(
        <div>
            <div className="bg-[#323232] p-4 h-screen w-[225px]">
                <button className="h-10 p-2 pl-4 w-[185px] bg-[#212121] rounded-2xl text-white flex justify-start font-light">+ New Chat</button>
                <div className="pt-10 text-white font-medium">
                    <p className="text-xs font-thin" >YESTERDAY</p>
                    <p>- History 1</p>
                    <p>- History 2</p>
                    <p>- History 3</p>
                </div>
                <div className="pt-10 text-white font-medium">
                    <p className="text-xs font-thin" >LAST WEEK</p>
                    <p>- History 1</p>
                    <p>- History 2</p>
                    <p>- History 3</p>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar

