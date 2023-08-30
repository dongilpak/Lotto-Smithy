import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface saveLottoObject {
    value: number[][];
}

const initialState: saveLottoObject = {
    value: [],
};

const saveLottoSlice = createSlice({
    name: 'saveLotto',
    initialState,
    reducers: {
        saveLotto: (state, action: PayloadAction<number[]>) => {
            state.value.push(action.payload);
        },
        removeLotto: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { saveLotto, removeLotto } = saveLottoSlice.actions;

export default saveLottoSlice.reducer;
