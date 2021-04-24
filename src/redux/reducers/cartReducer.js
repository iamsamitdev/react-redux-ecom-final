const initialData = {
    cartItems:[]
}

const cartReducer = (state=initialData, action) => {
    
    switch(action.type){
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        case 'DELETE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.title !== action.payload.title)
            }
        default: return state
    }

}

export default cartReducer
