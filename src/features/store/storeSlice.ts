import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import  {StoreInterface} from  '../../models/store';


const initialState: StoreInterface[] =
[ {
    name: 'general_store',
    quantity: 2,
    url: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62dea3499594dc2982ac87e2_general-store-free-logo-maker.png",
    storeItems: [{
        name: "banana",
        quantity: 3,
        notes: "Don't get more than 5",
        url: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="
    }]
},
{
    name: 'general_store',
    quantity: 2,
    url: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62dea3499594dc2982ac87e2_general-store-free-logo-maker.png",
    storeItems: [{
        name: "banana",
        quantity: 3,
        notes: "Don't get more than 5",
        url: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="
    }]
}]
    

    export const storesSlice = createSlice({
        name: 'store',
        initialState,
        reducers: {
            
        }

    })


    // selectors 
    export const selectStores = (state: RootState) => state.stores;

    export default storesSlice.reducer;