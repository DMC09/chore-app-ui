import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import  Store  from './features/store/Store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {useGetAllStoresAndItemsQuery} from './services/storeApi'

const App = () => {
const {data,error,isLoading, isFetching, isSuccess} = useGetAllStoresAndItemsQuery()

   const  allStoresAndItems = data?.data.map(store => {
     return <Store key={store.storeId} {...store} />;
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
