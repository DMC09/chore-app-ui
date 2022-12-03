import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from './features/store/Store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {useGetAllStoresQuery} from './services/storeApi'

function App() {
const {data,error,isLoading, isFetching, isSuccess} = useGetAllStoresQuery()

  // const stores = useAppSelector(selectStores);
  // const dispatch = useAppDispatch();

  const allStoresandItems = data?.data.map(store => {
    return <Store {...store}/>
  })

  useEffect(() =>{
    // This is the overall container for the, need to change to something else, ??
    // change this to a store. 
          console.log('component mounted!') 
          console.log(JSON.stringify(data?.data , null, 2))
        })


  return (
    <>
      {isLoading && <h2>  is Loading</h2>}
      {isFetching && <h2>  is Fetching</h2>}
      {error && <h2>  something went wrong</h2>}
      {isSuccess && allStoresandItems}
    </>
  );
}

export default App;
