import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { getAllStoresResponse } from "../models/store"

export const storesApi = createApi({
    reducerPath:"storesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints:(builder) =>   ({
        getAllStores:builder.query<getAllStoresResponse,void>({
            query:()=> '/stores'
        }),
        // deleteStore:builder.query<deleteStoreResponse,void>({
        //     query:(storeId)=> `store/${storeId}`
        // })
    })
    
})

export const {useGetAllStoresQuery} = storesApi