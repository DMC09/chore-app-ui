import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import  {StoreInterface} from  '../../models/store';


const initialState: StoreInterface[] =
[ ]
    

    export const storesSlice = createSlice({
        name: 'store',
        initialState,
        reducers: {
            
        }

    })


    // selectors 


    export default storesSlice.reducer;