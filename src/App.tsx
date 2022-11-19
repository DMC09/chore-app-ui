import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Stores } from './features/store/Store';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectStores } from './features/store/storeSlice';
import {useGetStoresQuery} from './services/storeApi'

function App() {
const {data,error,isLoading, isFetching, isSuccess} = useGetStoresQuery()

  // const stores = useAppSelector(selectStores);
  // const dispatch = useAppDispatch();

  useEffect(() =>{
    // This is the overall container for the, need to change to something else, ??
    // change this to a store. 
          console.log('component mounted!')  
          console.log(stores)
        },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Stores  />
      </header>
    </div>
  );
}

export default App;
