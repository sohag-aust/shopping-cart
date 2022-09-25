import { ADD_PRODUCT, REMOVE_PRODUCT } from "./shoppingType";

const initialState = {
    inventory: [
        {
            pid: 1,
            name: 'Asus Vivobook X515MA',
            qty: 20,
            price: 35500
        },
        {
            pid: 2,
            name: 'Dell E1916HV 18.5 Inch',
            qty: 35,
            price: 9300
        },
        {
            pid: 3,
            name: 'Canon Eos 4000D 18MP',
            qty: 72,
            price: 36500
        }
    ],

    cart: [
        {
            pid: 1,
            name: 'Asus Vivobook X515MA',
            qty: 0
        },
        {
            pid: 2,
            name: 'Dell E1916HV 18.5 Inch',
            qty: 0
        },
        {
            pid: 3,
            name: 'Canon Eos 4000D 18MP',
            qty: 0
        }
    ],

    totalItems: 0,
    totalPrice: 0
};

const shoppingCartReducer = (state = initialState, action) => {
    const productId = action.payload;
     
    let previousInventory = [...state.inventory];
    let previousCartItems = [...state.cart];
    let previousTotalItems = state.totalItems;
    let previousTotalPrice = state.totalPrice;

    const productIndexInInventory = previousInventory.findIndex(product => product.pid === productId);
    const productIndexInCart = previousCartItems.findIndex(item => item.pid === productId);

    switch(action.type) {
        case ADD_PRODUCT:
            {
                previousInventory[productIndexInInventory].qty = previousInventory[productIndexInInventory].qty - 1;
                previousCartItems[productIndexInCart].qty = previousCartItems[productIndexInCart].qty + 1;
                previousTotalItems = previousTotalItems + 1;
                previousTotalPrice = previousTotalPrice + previousInventory[productIndexInInventory].price;

                return {
                    ...state,
                    inventory: previousInventory,
                    cart: previousCartItems,
                    totalItems: previousTotalItems,
                    totalPrice: previousTotalPrice
                }
            }

        case REMOVE_PRODUCT:
            {
                previousInventory[productIndexInInventory].qty = previousInventory[productIndexInInventory].qty + 1;
                previousCartItems[productIndexInCart].qty = previousCartItems[productIndexInCart].qty - 1;
                previousTotalItems = previousTotalItems - 1;
                previousTotalPrice = previousTotalPrice - previousInventory[productIndexInInventory].price;

                return {
                    ...state,
                    inventory: previousInventory,
                    cart: previousCartItems,
                    totalItems: previousTotalItems,
                    totalPrice: previousTotalPrice
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default shoppingCartReducer;