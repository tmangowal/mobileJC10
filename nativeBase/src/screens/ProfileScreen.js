import React from 'react'
import { View, Text } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'blue'}}>
                Profile Screen
            </Text>
        </View>
    )
}

export default ProfileScreen