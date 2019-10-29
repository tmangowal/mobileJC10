import React, { Component } from 'react';
import { View, Platform, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { 
    Card, 
    CardItem, 
    Thumbnail, 
    Text, 
    Button, 
    Icon, 
    Left, 
    Body, 
    Right 
} from 'native-base';
import { connect } from 'react-redux';
import { getListPost } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getListPost();
    }

    renderPostList = () => {
        return this.props.postList.map((item) => {
            return (
                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: item.userPhoto }} />
                                <Body>
                                    <Text>{item.username}</Text>
                                    <Text note>Instagrin User</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: item.imageURL }} style={{height: 350, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>{item.caption}</Text>
                            </Left>
                        </CardItem>
                    </Card>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={{ text: 'Instagrin', style: { color: 'black', fontSize: 18 } }}
                    leftContainerStyle={{ flex: 3 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <ScrollView>
                    {this.renderPostList()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = ({ post }) => {
    return { postList: post.postList }
}

export default connect(mapStateToProps, { getListPost })(Home);