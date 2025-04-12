import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Login from './components/Login'
import Home from './components/Home'

export default function App() {
  const [page, setPage] = useState('login')
  const [name, setName] = useState(undefined)

  return (
    <View style={styles.container}>
      {page === 'login' && <Login setPage={setPage} setName={setName} />}
      {page === 'home' && <Home setPage={setPage} name={name} />}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
