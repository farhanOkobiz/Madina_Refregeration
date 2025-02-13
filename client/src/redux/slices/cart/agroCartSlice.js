import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// Function to load cart from local storage
const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem('agroCart');
    return cart ? JSON.parse(cart) : [];
};

// Function to save cart to local storage
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('agroCart', JSON.stringify(cart));
};

const agroCartSlice = createSlice({
    name: 'agroCart',
    initialState: loadCartFromLocalStorage(),
    reducers: {
        addToAgroCart: (state, action) => {
            // let cartAuth = useSelector((state) => state.auth);

            const userData = JSON.parse(localStorage.getItem('user'));


            const existingItem = state.find(item => item._id === action.payload._id && (item.userId == userData?.user?._id || null));


            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                toast.info(`${existingItem.title} quantity increased to ${existingItem.quantity}`, { autoClose: 500 });
            } else {
                state.push({ ...action.payload, quantity: action.payload.quantity, userId: userData?.user?._id || null });
                toast.success(`${action.payload.title} added to cart`, { autoClose: 500 });
            }
            saveCartToLocalStorage(state);
        },
        deleteFromAgroCart: (state, action) => {
            const userData = JSON.parse(localStorage.getItem('user'));


            const newState2 = state.filter(item => (item._id !== action.payload));

            let newState;
            if (userData?.user?._id) {
                newState = state.filter(item => (item._id !== action.payload || (item.userId !== userData?.user?._id || null)));
            } else {
                newState = state.filter(item => (item._id !== action.payload || item.userId !== null));
            }


            const deletedItem = state.find(item => item._id === action.payload);
            if (deletedItem) {
                toast.error(`${deletedItem.title} removed from cart`, { autoClose: 500 });
            }
            saveCartToLocalStorage(newState);
            return newState;
        },
        resetAgroCart: (state) => {
            // const newState = [];
            const userData = JSON.parse(localStorage.getItem('user'));
            const newState = state.filter(item => item.userId !== (userData?.user?._id || null));
            toast.warn("Cart reset", { autoClose: 500 });
            saveCartToLocalStorage(newState);
            return newState;
        },
        updateQuantity: (state, action) => {
            const userData = JSON.parse(localStorage.getItem('user'));
            const existingItem = state.find(item => item._id === action.payload._id && item.userId === (userData?.user?._id || null));
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
                toast.info(`${existingItem.title} quantity updated to ${existingItem.quantity}`, { autoClose: 500 });
                saveCartToLocalStorage(state);
            }
        },
        decreaseQuantity: (state, action) => {
            const userData = JSON.parse(localStorage.getItem('user'));
            const existingItem = state.find(item => item._id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                toast.info(`${existingItem.title} quantity decreased to ${existingItem.quantity}`, { autoClose: 500 });
                saveCartToLocalStorage(state);
            }
        },
    },
});

// Export actions and reducer
export const { addToAgroCart, deleteFromAgroCart, resetAgroCart, updateQuantity, decreaseQuantity } = agroCartSlice.actions;
export default agroCartSlice.reducer;
