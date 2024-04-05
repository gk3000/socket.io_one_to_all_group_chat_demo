import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import {socket, URL} from './socket'

export default function App() {
  const [data, setData] = useState('')
  const [usersNumber, setUsersNumber] = useState(0)

socket.on('fromServer', (data) => {
    setData(data.date)
    setUsersNumber(data.usersNumber)
})


  return (
    <View style={styles.container}>
    <Text>This is data received from the server: {data}</Text>
    <Text>Number of users connected: {usersNumber}</Text>
    </View>
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
