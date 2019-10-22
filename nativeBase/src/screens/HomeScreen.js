import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'

const HomeScreen = (props) => {
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'red'}}>
                Home Screen
            </Text>
            <Button primary onPress={() => props.navigation.navigate('Stack1Screen')}>
                <Text>Go To Stack 1</Text>
            </Button>
        </View>
    )
}

export default HomeScreen