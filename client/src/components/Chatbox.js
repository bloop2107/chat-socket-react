
import Link from 'react-router-dom';



const Chatbox = ({name,room}) => {
    return (
        <div>
            <div style={{overscrollBehavior: 'none'}}>
                <div className="fixed w-full bg-indigo-400 h-16 pt-2 text-white flex justify-between shadow-md" style={{top: '0px', overscrollBehavior: 'none'}}>
                {/* back button */}
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 my-1 text-green-100 ml-2">
                    <path className="text-green-100 fill-current" d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z" />
                    </svg>
                </Link>
                <div className="my-3 text-green-100 font-bold text-lg tracking-wide">
                    Name: @{name} ||
                    Room: @{room}
                </div>
                {/* 3 dots */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-dots-vertical w-8 h-8 mt-2 mr-2">
                    <path className="text-green-100 fill-current" fillRule="evenodd" d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
                </div>
                
            </div>
            
            </div>

    )
}

export default Chatbox
