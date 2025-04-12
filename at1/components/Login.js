import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Text } from 'react-native'

export default function Login({ setPage, setName }) {
  const [inputValue, setInputValue] = useState('')

  const login = () => {
    if (inputValue.length < 3) {
      alert('O nome deve ter pelo menos 3 caracteres.')
      return
    }

    setName(inputValue)
    setInputValue('')
    setPage('home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Por favor, insira seu nome!</Text>
      <TextInput
        placeholder="Breno Cunha"
        onChangeText={setInputValue}
        value={inputValue}
        placeholderTextColor={'#222'}
        style={styles.input}
        onSubmitEditing={login}
      />
      <Button title="Entrar" onPress={login} color={'black'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    width: '75%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
})
