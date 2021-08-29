import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { starterInterface1 } from "../../model"


const initialState = {
    starters: [] as starterInterface1[],
}

export const starterSlice = createSlice({
    name: 'starter',
    initialState,
    reducers: {
        setStarter: (state, action: PayloadAction<starterInterface1[]>) => {
            state.starters = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setStarter} = starterSlice.actions

export default starterSlice.reducer