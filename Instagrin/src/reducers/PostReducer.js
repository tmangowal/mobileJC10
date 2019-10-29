import { 
    FILL_POST_LIST,
    EMPTY_POST_LIST,
    SELECT_POST,
    SELECT_EXPLORE_POST,
    DELETE_POST
} from '../actions/types';

const INITIAL_STATE = { 
    postList: [],
    selectedPost: null,
    selectExpPost: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILL_POST_LIST :
            return { ...state, postList: [...state.postList, action.payload] };
        case EMPTY_POST_LIST :
            return { ...state, postList: [] }
        case SELECT_POST :
            return { ...state, selectedPost: action.payload, loading: false }
        case SELECT_EXPLORE_POST :
            return { ...state, selectExpPost: action.payload }
        case DELETE_POST :
            return { ...state, loading: true }
        default :
            return state;
    }
};
