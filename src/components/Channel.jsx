import { useCloud, useCloudState , } from "freestyle-sh"
import { ChannelState } from "../cloudstate/channel_state"
import { useEffect, useState } from "react";
import { Message } from "../cloudstate/messages";

export const Channel = () => {
    const c = useCloudState(ChannelState);
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const f = async () => {
            // console.log(c, c['get']);
            console.log('1')
            try {
                console.log('1.5')
                const v =  c.get()
                console.log('3')
                console.log(await v)
                
            } catch (e) {
                console.log("Error",e )
            }
            console.log('2')
            // const msgs = await c.get()
            // console.log(msgs)
            // setMessages(msgs)
        }
        f();  
    }, [])

    return (
    <div>
       <div className="messages_body">{messages.map(m=>{
        <div>{m}</div>
       })}</div>
        <div className="post_box">
            <form>
                <input id="post"></input>
                <button value="post" onClick={async (e)=>{
                    c.post(new Message(document.querySelector('#post').value))
                    e.preventDefault();
                }}>Post</button>
            </form>
        </div>   
    </div>)
}