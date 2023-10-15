import { createSlice } from "@reduxjs/toolkit";

const gptState = {
   showGPTSuggestions : false
}

const gptSlice = createSlice({
    name: "gpt",
    initialState:gptState,
    reducers:{
        showGptSearch : (state) =>{
            state.showGPTSuggestions = !state.showGPTSuggestions
            console.log(state.showGPTSuggestions)
        }
    }
})

export const {showGptSearch} = gptSlice.actions
export default gptSlice.reducer