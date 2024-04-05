import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView } from 'react-native';
import {useState} from 'react'
import {socket, URL} from './socket'

export default function App() {
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
      return <Text key={index}>{msg}</Text>
    })
  }

  return (
    <SafeAreaView style={styles.container}>
    <View >
    <Text>This is data received from the server: {data}</Text>
    <Text>Number of users connected: {usersNumber}</Text>
    <View onSubmit={sendMessage}>
    <Text>Message</Text>
    <TextInput 
    multiline
    onChangeText={setMessage} 
    value={message}
    style={styles.textInput}/>
    <Button title='Send' onPress={sendMessage}/>
    </View>
    <ScrollView>
    <Text>All visitors chat</Text>
    {renderChatMessages()}
    </ScrollView>
    </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginBottom: 20
  }
});
