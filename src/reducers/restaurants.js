const initialState = { isLoading: true, restaurants: [] };

const restaurantsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_RESTAURANTS":
            return { ...state, isLoading: true };
        case 'ADD_RESTAURANTS':
            return {...state, restaurants: action.restaurants, isLoading: false};
        default:
            return state;
    }
};

export default restaurantsReducer;