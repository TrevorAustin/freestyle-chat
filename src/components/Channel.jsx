import { useCloud, useCloudState , } from "freestyle-sh"
import { ChannelState } from "../cloudstate/channel_state"
import { useEffect, useState } from "react";
import { Message } from "../cloudstate/messages";

export const Channel = () => {
    const c = useCloudState(ChannelState);
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        c.get().then(v => setMessages(v))
    }, [])

    return (
    <div>
       <div className="messages_body">{messages.map(m=>
        <div>{m}</div>
       )}</div>
        <div className="post_box">
            <form>
                <input id="post"></input>
                <button value="post" onClick={(e)=>{
                    e.preventDefault();
                    c.post(document.querySelector('#post').value)
                        .then(() => c.get())
                        .then(v => setMessages(v))
                }}>Post</button>
            </form>
        </div>   
    </div>)
}