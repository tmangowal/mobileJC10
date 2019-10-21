import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState('')

  return (
    <View style={{
      ...styles.container
      }}>
        <View style={{flex : 1, flexDirection : 'row', alignItems : 'center'}}>
          <Text style={{fontSize : 30}}>{counter}</Text>
          <Button title='ADD' onPress={() => setCounter(counter + 1)} />
        </View>
        <View style={{flex : 1}}>
          <Text>{inputText}</Text>
          <TextInput onChangeText={e => setInputText(e)} placeholder='Input Text' />
          <Button title='ADD' onPress={() => setCounter(counter + 1)} />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgRed : {
    backgroundColor : 'red'
  },
  textWhite : {
    color : 'white'
  }
});
