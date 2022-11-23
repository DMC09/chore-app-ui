import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Stores } from './features/store/Store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {useGetStoresQuery} from './services/storeApi'

function App() {
const {data,error,isLoading, isFetching, isSuccess} = useGetStoresQuery()

const storeToDisplay = data?.data



  // const stores = useAppSelector(selectStores);
  // const dispatch = useAppDispatch();

  useEffect(() =>{
    // This is the overall container for the, need to change to something else, ??
    // change this to a store. 
          console.log('component mounted!')  
          console.log(error,'error')  
          console.log(JSON.stringify(storeToDisplay, null, 2),'stringifcy')
        })


  return (
    <>
      {isLoading && <h2>  is Loading</h2>}
      {isFetching && <h2>  is Fetching</h2>}
      {error && <h2>  something went wrong</h2>}
      {isSuccess && <p> We got a hit!</p>}
    </>
  );
}

export default App;
