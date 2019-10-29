import React from 'react'
import { View, Text } from 'react-native'

const ParamScreen = props => {
    const param = props.navigation.getParam('number', 0)
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'red'}}>
                Param Screen
            </Text>
            <Text style={{fontSize: 36, color: 'red'}}>
                {
                    parseInt(param) % 2 == 0
                    ?
                    `Angka anda adalah ${param} (Genap)` 
                    :
                    `Angka anda adalah ${param} (Ganjil)` 
                }
            </Text>
        </View>
    )
}

export default ParamScreen