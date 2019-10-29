import React, { Component } from 'react';
import { View, Text, Platform, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { editProfileInit, selectPost } from '../actions';

class Profile extends Component {
    onBtnEditProfilePress = () => {
        this.props.editProfileInit(
            this.props.user.user.displayName,
            this.props.user.user.photoURL
        );
        this.props.navigation.navigate('EditProfile')
    }

    selectPostPress = (selectedPost) => {
        this.props.selectPost(selectedPost)
        this.props.navigation.navigate('PostDetail')
    }

    renderListPost = () => {
        return this.props.postList.map((item) => {
            if(this.props.user.user.uid === item.userId) {
                return (
                    <TouchableWithoutFeedback onPress={() => this.selectPostPress(item)}>
                        <View 
                            style={{ width: '33%', marginVertical: 1 }}
                        >
                            <Image source={{uri: item.imageURL }} style={{height: 125, width: '100%' }}/>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        })
    }

    render() {
        console.log(this.props.user)
        if(this.props.user) {
            return (
                <View style={{flex:1}}>
                    <Header
                        leftComponent={{ 
                            text: this.props.user.user.displayName, 
                            style: { color: 'black', fontSize: 18 } 
                        }}
                        leftContainerStyle={{ flex: 3 }}
                        rightComponent={{ 
                            icon: 'menu', 
                            color: 'black',
                            onPress: () => this.props.navigation.toggleDrawer()
                        }}
                        containerStyle={{
                            backgroundColor: '#fff',
                            justifyContent: 'space-around',
                            marginTop: Platform.OS === 'ios' ? 0 : - 25
                        }}
                    />
                    <ListItem
                        leftAvatar={{
                            source: { uri: this.props.user.user.photoURL },
                            size: 'large'
                        }}
                        title={this.props.user.user.displayName}
                        subtitle={'Instagrin User'}
                    />
                    <Button 
                        title="Edit Profile"
                        containerStyle={{ marginVertical: 15, marginHorizontal: 15 }}
                        buttonStyle={{ borderColor: 'black' }}
                        titleStyle={{ color: 'black' }}
                        type='outline'
                        onPress={this.onBtnEditProfilePress}
                    />
                    <ScrollView>
                        <View 
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            {this.renderListPost()}
                        </View>
                    </ScrollView>
                </View>
            )
        }

        return <View />
    }
}

const mapStateToProps = ({ auth, post }) => {
    return { user: auth.user, postList: post.postList }
}

export default connect(mapStateToProps, { editProfileInit, selectPost })(Profile);