// import { configureStore } from "@reduxjs/toolkit";
// import counterslice from './Slice'

import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './Slice'

// import { configureStore } from "@reduxjs/toolkit";
// import itemsReducer from './Slice'

// const store = configureStore({
//     reducer:{
//         counter:counterslice
//     }
// })
// export default store;

// const store = configureStore({
//     reducer:{
//         items:itemsReducer
//     }
// })
// export default store

const store=configureStore({
    reducer:{
        calc:calculatorReducer
    }
})
export default store;