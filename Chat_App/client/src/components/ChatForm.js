import {useState} from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../socketApi";

function ChatForm(){

    const {setMessages} = useChat();

    const [message , setMessage] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(message)

        setMessages((prevState) => [...prevState, {message , formMe : true}])
        sendMessage(message)
        setMessage('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                className={styles.textInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    )
}
export default ChatForm;