import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { createStoreResponse, deleteStoreResponse, getAllStoresAndItemsResponse,getStoreItemsResponse } from "../models/response"

export const storesApi = createApi({
    reducerPath:"storesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // use variable 
    endpoints:(builder) =>   ({
        getAllStoresAndItems:builder.query<getAllStoresAndItemsResponse,void>({
            query:()=> '/stores'
        }),
        deleteStore:builder.mutation<deleteStoreResponse,void>({
            query:(storeId)=>`/stores/${storeId}`
        }),
        createStore:builder.mutation<createStoreResponse,void>({
            query:(payload)=> ({
                url: `/stores`,
                method: "POST",
                body: payload
            })
        }),
        getStoreItems:builder.query<getStoreItemsResponse,void>({
            query:(storeId)=> `/stores/${storeId}/items`
        }),

        // deleteStore:builder.query<deleteStoreResponse,void>({
        //     query:(storeId)=> `store/${storeId}`
        // })
    })
    
})

export const {useGetAllStoresAndItemsQuery,useGetStoreItemsQuery} = storesApi