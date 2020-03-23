import React, { useState, useEffect } from 'react'
import { Text, Button } from 'react-native'
import { retrieveUser } from 'my-logic'

export default function ({ onLogout }) {
    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
            try {
                setUser(await retrieveUser())
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return <>
        <Text>Home</Text>
        {user && <Text>Hello, {user.name}!</Text>}
        <Button
            title="Logout"
            onPress={onLogout}
        />
    </>
}
