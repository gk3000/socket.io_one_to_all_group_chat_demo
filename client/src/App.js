import {useState} from 'react'
import {socket, URL} from './socket'

function App() {
  const [data, setData] = useState('')
  const [usersNumber, setUsersNumber] = useState(0)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])

// socket.on('liveUsers', (data) => {
//     setData(data.date)
//     setUsersNumber(data.usersNumber)
// })
socket.on('fromServer', (msg) => {
// add the message to state array of message
    setChatMessages([...chatMessages, msg])
})

const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('fromClient', message)
    setMessage('')
}

const renderChatMessages = () => {
    return chatMessages.map((msg, index) => {
        return <p key={index}>{msg}</p>
    })
}


  return (
    <div >
     <p>This is data received from the server: {data}</p>
     <p>Number of users connected: {usersNumber}</p>
     {/*form to send a message to chat, textarea with label "message" and a button with label "send"*/}
      <form onSubmit={sendMessage}>
        <label>Message</label>
        <textarea onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
        <button>Send</button>
      </form>
      <section>
        <h1>All visitors chat</h1>
        {renderChatMessages()}
      </section>
    </div>
  );
}

export default App;
