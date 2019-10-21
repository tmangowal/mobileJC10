import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import { Grid, Row, Col, Content, Container, Header, Input, H1, Button } from 'native-base'

export default function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const Item = (itemProp) => {
    return (
      <View style={{
        flexDirection : 'row',
        justifyContent : 'space-around'
      }}>
        <Text style={{color : 'white'}}>{itemProp.text}</Text>
        <Button danger onPress={() => setData(data.filter(val => val.key != itemProp.barang))}>
          <Text style={{color : 'white'}}>
            Delete
          </Text>
        </Button>
      </View>
    )
  }

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
            marginRight : 15,
            color : 'white'
          }} />
          <Button onPress={() => {
            setData([...data, {
              key : Date.now().toString(),
              value : input
            }])}
          }
          light style={{padding : 5}}>
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
          </Text>
        </View>
        <View style={{
          flex : 9
        }}>
          {/* {renderData()} */}
          <FlatList data={data} renderItem={({item}) => <Item barang={item.key} text={item.value} />} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
