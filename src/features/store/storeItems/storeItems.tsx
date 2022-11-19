import React from 'react';
import StoreItemInterface from '../../../models/storeItem';


export function StoreItem(storeItem: StoreItemInterface) {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "50%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
    return (
        <div style = { styles.main } className="storeItem"> 
         <p>{storeItem.name}</p>
         <p>{storeItem.quantity}</p>
         <p>{storeItem.notes}</p>
        <img src={storeItem.url} alt="test" />
        </div>
      )
}
