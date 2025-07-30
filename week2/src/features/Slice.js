// import {createSlice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

// import { createSlice } from "@reduxjs/toolkit";

// const counterslice = createSlice({
//     name :'counter',
//     initialState:{value:0},
//     reducers:{
//         increment:(state)=>{if (state.value<10) state.value+=1},
//         decrement:(state)=>{if (state.value>0) state.value-=1}
//     }
// })
// export const {increment,decrement}=counterslice.actions
// export default counterslice.reducer

// const itemsSlice = createSlice({
//     name:'items',
//     initialState:[],
//     reducers:{
//         addItem:(state,action)=>{
//             state.push(action.payload);
//         }
//     }
// })
// export const {addItem}=itemsSlice.actions
// export default itemsSlice.reducer

const calculatorSlice = createSlice({
    name:'calc',
    initialState:{result:0},
    reducers:{
        add:(state,action)=>{state.result=action.payload.input1+action.payload.input2},
        sub:(state,action)=>{state.result=action.payload.input1-action.payload.input2},
        reset:(state)=>{state.result=0}
    }
})
export const {add,sub,reset} = calculatorSlice.actions
export default calculatorSlice.reducer