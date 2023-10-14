// import { createAction } from "../../utils/reducer/reducer.utils";

// export const setIsCartOpen = (bool) => ( 
//     createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
// );

// export const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//         (total, cartItem) => total + cartItem.quantity,
//         0
//     );

//     const newCartTotal = newCartItems.reduce(
//         (total, cartItem) => total + cartItem.quantity * cartItem.price,
//         0
//     );

//     return (
//         createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//             cartItems: newCartItems,
//             cartTotal: newCartTotal,
//             cartCount: newCartCount
//         })
//     );
// };