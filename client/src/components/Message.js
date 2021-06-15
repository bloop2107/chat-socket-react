import {React} from 'react'

const Message = ({ message, name }) => {

    let senderStatus = false;

    const trimmedName =  name.trim().toLowerCase();

    if(message.user === trimmedName){
        senderStatus = !senderStatus;
    }

    console.log(message,trimmedName);
    

    return (
        senderStatus 
        ? (
            <div className="mt-20 mb-16">
                    <div className="clearfix">
                        <div className="bg-indigo-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">{message.text}</div>
                    </div>
            </div>
        ) 
        : (
            <div className="mt-20 mb-16">
                <div className="clearfix">
                    <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg float-left">{message.text}</div>
                </div>
            </div>
        )
    )
}

export default Message
