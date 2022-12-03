import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from './features/store/Store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {useGetAllStoresQuery} from './services/storeApi'

function App() {
const {data,error,isLoading, isFetching, isSuccess} = useGetAllStoresQuery()

  const allStoresAndItems = data?.data.map(store => {
    return <Store {...store}/>
  })

  return (
    <>
      {isLoading && <h2>  is Loading</h2>}
      {isFetching && <h2>  is Fetching</h2>}
      {error && <h2>  something went wrong</h2>}
      {isSuccess && allStoresAndItems}
    </>
  );
}

export default App;
