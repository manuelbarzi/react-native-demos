import React from 'react'
import { Text, Button } from 'react-native'

export default function ({ onRegister, onLogin }) {
    return <>
        <Text>Landing</Text>
        <Button
            title="Register"
            onPress={onRegister}
        />
        <Text>or</Text>
        <Button
            title="Login"
            onPress={onLogin}
        />
    </>
}
