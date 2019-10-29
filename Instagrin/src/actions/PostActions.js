import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import _ from 'lodash';

import {
    FILL_POST_LIST,
    EMPTY_POST_LIST,
    SELECT_POST,
    DELETE_POST,
    SELECT_EXPLORE_POST
} from './types';

export const getListPost = () => {
    return (dispatch) => {
        firebase.database().ref(`/posts`)
        .on('value', snapshot => {
           console.log(snapshot.val())
           dispatch({
               type: EMPTY_POST_LIST
           })
            _.map(snapshot.val(), (val, id) => {
                firebase.database().ref(`/users/${val.userId}`)
                .once('child_added', (snapshot) => {
                    var value = snapshot.val()
                    console.log(value)
                    dispatch({
                        type: FILL_POST_LIST,
                        payload: { 
                            ...val, 
                            id, 
                            username: value.displayName, 
                            userPhoto: value.photoURL 
                        }
                    })
                })
            });
        });
    }
}

export const selectPost = (selectedPost) => {
    return {
        type: SELECT_POST,
        payload: selectedPost
    }
}

export const selectExpPost = (selectedPost) => {
    return {
        type: SELECT_EXPLORE_POST,
        payload: selectedPost
    }
}

export const deletePost = (post) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_POST
        })
        firebase.database().ref(`/posts/${post.id}`)
            .remove()
            .then(() => {
                dispatch({
                    type: SELECT_POST,
                    payload: null
                })
            })
    }
}