import "../App.css"

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { useEffect } from "react";
import { useChat} from "../context/ChatContext";
import { init , subscribeChat , subscribeInitialMessages } from "../socketApi";


function Container(){

    const {setMessages} = useChat();

    useEffect(() =>{
        init();

        subscribeInitialMessages((messages) =>{
            setMessages(messages)
        })

        subscribeChat((message) =>{
            setMessages((preveState) =>[...preveState, {message}]);
        });
    },[])

    return(
        <div className="App">
            <ChatList />
            <ChatForm />
        </div>
    )
}
export default Container;