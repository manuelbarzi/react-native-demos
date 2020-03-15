import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button } from 'react-native'

export default function ({ onSubmit, onBack }) {
    const [name, setName] = useState('n')
    const [surname, setSurname] = useState('s')
    const [username, setUsername] = useState('u')
    const [password, setPassword] = useState('p')

    return <>
        <Text>Register</Text>
        <TextInput style={style}
            onChangeText={setName}
            value={name}
            placeholder="name"
        />
        <TextInput style={style}
            onChangeText={setSurname}
            value={surname}
            placeholder="surname"
        />
        <TextInput style={style}
            onChangeText={setUsername}
            value={username}
            placeholder="username"
        />
        <TextInput style={style}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
            secureTextEntry={true}
        />
        <Button
            title="Register"
            onPress={() => onSubmit(name, surname, username, password)}
        />
        <Button
            title="go back"
            onPress={onBack}
        />
    </>
}

const style = {
    height: 40,
    minWidth: 200,
    borderColor: 'gray',
    borderWidth: 1
}
