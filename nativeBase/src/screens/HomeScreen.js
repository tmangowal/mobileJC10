import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Button, Input } from 'native-base'

const HomeScreen = (props) => {
    const [number, setNumber] = useState('')
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
            <Input placeholder="Input Number" onChangeText={num => setNumber(num)}/>
            <Button primary onPress={() => props.navigation.navigate('ParamScreen', {number})}>
                <Text>Go To Stack 1</Text>
            </Button>
        </View>
    )
}

export default HomeScreen