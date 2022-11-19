import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { StoreInterface } from "../models/store"

export const storesApi = createApi({
    reducerPath:"storesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints:(builder) =>   ({
        getStores:builder.query<StoreInterface[],void>({
            query:()=> '/stores'
        })
    })
    
})

export const {useGetStoresQuery} = storesApi