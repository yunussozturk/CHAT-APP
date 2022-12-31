import styles from './styles.module.css'

function ChatItem({item}){
    return(
        <div className={`${styles.chatItem} ${item.formMe ? styles.right : ""}`}>
            {item.message}
        </div>
    )
}
export default ChatItem;