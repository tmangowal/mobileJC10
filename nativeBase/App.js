import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { Grid, Row, Col, Content, Container, Header, Input, H1, Button } from 'native-base'

export default function App() {

  const [input, setInput] = useState('')

  return (
    <View style={{
      flex : 1,
      backgroundColor : 'black',
      flexDirection : 'column',
      justifyContent : 'center'
    }}>
      {/* HEADER + INPUT*/}
      <View style={{
        flex : 1,
        // backgroundColor : 'white'
        justifyContent : 'space-around'
      }}>
        <H1 style={{
          color : 'white',
          marginTop : 30,
          textAlign : 'center'
        }}>
          Welcome To My TODO App
        </H1>
        <View style={{
          flexDirection : 'row',
          justifyContent : 'space-around',
          paddingHorizontal : 10
        }}>
          <Input onChangeText={(text) => setInput(text)} 
          placeholder='New Todo' 
          style={{
            borderWidth : 1,
            borderBottomColor : 'lightgrey',
            marginRight : 15
          }} />
          <Button light style={{padding : 5}}>
            <Text>Add New</Text>
          </Button>
        </View>
      </View>
      <View style={{
        flex : 3,
        flexDirection : 'column'
      }}>
        <View style={{
          flex : 1
        }}>
          <Text style={{
            color : 'white',
            textAlign : 'center'
          }}>
            TODO GOES HERE!
            {input}
          </Text>
        </View>
        <View style={{
          flex : 9,
          // backgroundColor : 'white'
        }}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
