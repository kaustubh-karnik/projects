
import SideBar from '../components/SideBar'
import Navbarr from '../components/Navbarr'
import ImageUpload from '../components/ImageUpload'
import ChatWindow from '../components/ChatWindow'



const Chat = () => {
    return(
        <div>
            <Navbarr />
            <div className='flex flex-row'>
                <SideBar />
                <ChatWindow />
                <ImageUpload />
            </div>
        </div>
    )
}


export default Chat

