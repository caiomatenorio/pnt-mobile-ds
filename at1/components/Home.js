import { useState, useEffect } from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import images from '../images'

export default function Home({ setPage, name }) {
  const [greeting, setGreeting] = useState('Olá')
  const [partOfTheDay, setPartOfTheDay] = useState(undefined)

  const changeGreeting = () => {
    const greetings = ['Olá', 'Bem-vindo ao nosso app', 'Calma calabreso']

    const currentGreeting = greetings.indexOf(greeting)
    const nextGreeting = (currentGreeting + 1) % greetings.length

    setGreeting(greetings[nextGreeting])
  }

  const logout = () => {
    setPage('login')
  }

  const getPartOfTheDay = () => {
    const hour = new Date().getHours()

    if (hour >= 6 && hour < 12) return 'manhã'
    if (hour >= 12 && hour < 18) return 'tarde'
    return 'noite'
  }

  const getHourGreeting = () => {
    switch (partOfTheDay) {
      case 'manhã':
        return 'Bom dia!'
      case 'tarde':
        return 'Boa tarde!'
      case 'noite':
        return 'Boa noite!'
      default:
        return ''
    }
  }

  useEffect(() => {
    setPartOfTheDay(getPartOfTheDay())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutBtn}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {greeting === 'Calma calabreso' && (
          <Image
            source={
              images.calmaCalabreso[partOfTheDay === 'noite' ? 'noite' : 'dia']
            }
            style={styles.image}
          />
        )}
        <Text style={styles.greeting}>
          {greeting}, {name}! {getHourGreeting()}
        </Text>
        <Button
          title="Trocar saudação"
          onPress={changeGreeting}
          color={'black'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 40,
    width: '100vw',
  },

  logoutBtn: {
    textDecorationLine: 'underline',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
})
