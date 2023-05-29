import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface lottoObject {
    value: number[][][];
    inventory: number[][];
    suggestions: number[][][];
}

const initialState: lottoObject = {
    value: [],
    inventory: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45],
    ],
    suggestions: [],
};

const lottoSlice = createSlice({
    name: 'lotto',
    initialState,
    reducers: {
        getLogic: (state, action: PayloadAction<number[][]>) => {
            if (state.value.flat().length >= 30) {
                const startCount =
                    state.value.flat().length + action.payload.length - 30;
                const originalLotto = state.value
                    .flat()
                    .slice(startCount, state.value.flat().length);
                state.value.splice(0);
                for (let i = 0; i < action.payload.length; i++) {
                    originalLotto.push(action.payload[i]);
                }

                state.value.push(originalLotto);
            } else {
                state.value.push(action.payload);
            }
        },
        getSuggestion: (state, action) => {
            if (state.suggestions) {
                state.suggestions.splice(0);
                state.suggestions.push(action.payload);
                return;
            }
            state.suggestions.push(action.payload);
        },
    },
});

export const { getLogic, getSuggestion } = lottoSlice.actions;

export default lottoSlice.reducer;
