import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import logic, { registerUser, loginUser, logoutUser, isUserLoggedIn } from 'my-logic'
import { Landing, Register, Login, Home } from './components'
const { expo: { slug: name, version } } = require('./app.json')

logic.__context__.storage = AsyncStorage

export default function App() {
  const [view, setView] = useState('landing')

  useEffect(() => {
    (async () => {
      (await isUserLoggedIn()) && setView('home')
    })()
  }, [])

  async function handleRegisterSubmit(name, surname, username, password) {
    try {
      await registerUser(name, surname, username, password)

      setView('login')
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLoginSubmit(username, password) {
    try {
      await loginUser(username, password)

      setView('home')
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLogout() {
    try {
      await logoutUser()

      setView('login')
    } catch (error) {
      console.log(error)
    }
  }

  function handleGoToRegister() {
    setView('register')
  }

  function handleGoToLogin() {
    setView('login')
  }

  function handleGoBack() {
    setView('landing')
  }

  return <View style={styles.container}>
    <Text>{`${name} ${version}`}</Text>
    {view === 'landing' && <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}
    {view === 'register' && <Register onSubmit={handleRegisterSubmit} onBack={handleGoBack} />}
    {view === 'login' && <Login onSubmit={handleLoginSubmit} onBack={handleGoBack} />}
    {view === 'home' && <Home onLogout={handleLogout} />}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
