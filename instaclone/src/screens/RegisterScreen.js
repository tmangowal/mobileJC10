import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Grid, Col, Row, H1 } from 'native-base'
import firebase from 'firebase'

const RegisterScreen = props => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')

    const onRegister = () => {
        if((password === repPassword) && password && repPassword && username && email) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user.user.uid)
                const uid = user.user.uid
                firebase.database().ref(`/users/${uid}`)
                .set({
                    username,
                    email,
                    password
                })
                .then(() => Alert.alert('Register Success!'))
                .catch(() => Alert.alert('Register Failed'))
            })
            .catch(err => {
                Alert.alert('Firebase Auth Failed')
            })
        }else {
            Alert.alert('Error!', 'Password and repeat password not identical!')
        }
    }

    return (
        <View style={{
            flex : 1,
            backgroundColor : '#86c5d8',
            flexDirection : 'column',
            alignSelf : 'stretch'
        }}>
                <Grid>
                    {/* <Row size={1} style={{
                        alignItems: 'center'
                    }}> */}
                    <Col size={.5} style={{ flexDirection : 'column', justifyContent : 'flex-end' }}>
                        <H1 style={{ color : '#f0f8ff', textAlign : 'center', marginBottom : 20 }}>
                            Welcome To InstaClone
                        </H1>
                    </Col>
                    {/* </Row> */}
                    <Row size={1.5} style={{
                        alignItems: 'center'
                    }}>
                        <Col style={{ padding : 30, justifyContent : 'space-around' }}>
                            <View  style={{...styles.inputRounded}} >
                                <Input onChangeText={text => setEmail(text)} placeholder='Email' />
                            </View>
                            <View style={{...styles.inputRounded}}>
                                <Input onChangeText={text => setUsername(text)} placeholder='Username' />
                            </View>
                            <View style={{...styles.inputRounded}}>
                                <Input secureTextEntry={ true } onChangeText={text => setPassword(text)} placeholder='Password' />
                            </View>
                            <View style={{...styles.inputRounded}}>
                                <Input secureTextEntry={ true } onChangeText={text => setRepPassword(text)} placeholder='Repeat Password' />
                            </View>
                        </Col>
                    </Row>
                    <Col size={1} style={{
                        alignItems: 'center'
                    }}>
                        <Button onPress={onRegister} rounded style={{
                            backgroundColor : '#cae9f5',
                            paddingHorizontal : 50,
                            paddingVertical : 10
                        }}>
                            <Text style={{
                                color : 'black',
                                alignSelf : 'center'
                            }}>
                                Register
                            </Text>
                        </Button>
                    </Col>
                </Grid>
        </View>
    )
}

const styles = StyleSheet.create({
    inputRounded : { 
        color : 'gray', 
        backgroundColor : '#f0f8ff',
        borderBottomEndRadius : 50,
        borderTopEndRadius : 50,
        borderBottomStartRadius : 50,
        borderTopStartRadius : 50,
        paddingLeft : 20,
        marginVertical : 10,
        flex : 1
    }
})

export default RegisterScreen