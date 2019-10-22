import React from 'react'
import { View, Text } from 'react-native'

const StackTwo = () => {
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'blue'}}>
                Stack 2
            </Text>
        </View>
    )
}

export default StackTwo