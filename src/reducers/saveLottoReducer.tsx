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
    },
});

export const { saveLotto } = saveLottoSlice.actions;

export default saveLottoSlice.reducer;
